import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from 'lucide-react'

export default function SignupPage() {
  const [roles, setRoles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    defaultValues: {
      role_id: '3' // Varsayılan olarak Müşteri rolü
    }
  })

  const selectedRole = watch('role_id')

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axiosInstance.get('/roles')
        setRoles(response.data)
      } catch (error) {
        console.error('Roller çekilirken hata oluştu:', error)
        setError('Roller yüklenirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    }

    fetchRoles()
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setError(null)

    try {
      await axiosInstance.post('/signup', data)
      history.goBack()
      alert('Hesabınızı aktifleştirmek için e-postanızdaki linke tıklamanız gerekmektedir!')
    } catch (error) {
      console.error('Kayıt hatası:', error)
      setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Kayıt Ol</CardTitle>
        <CardDescription>Yeni bir hesap oluşturun</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">İsim</Label>
            <Input
              id="name"
              {...register('name', { required: 'İsim gereklidir', minLength: { value: 3, message: 'İsim en az 3 karakter olmalıdır' } })}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'E-posta gereklidir',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Geçersiz e-posta adresi'
                }
              })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Şifre</Label>
            <Input
              id="password"
              type="password"
              {...register('password', {
                required: 'Şifre gereklidir',
                minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                  message: 'Şifre sayı, küçük harf, büyük harf ve özel karakter içermelidir'
                }
              })}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="passwordConfirmation">Şifreyi Onayla</Label>
            <Input
              id="passwordConfirmation"
              type="password"
              {...register('passwordConfirmation', {
                validate: (value) => value === watch('password') || 'Şifreler eşleşmiyor'
              })}
            />
            {errors.passwordConfirmation && <p className="text-sm text-red-500">{errors.passwordConfirmation.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Rol</Label>
            <Controller
              name="role_id"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Bir rol seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.id.toString()}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {selectedRole === '2' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="storeName">Mağaza Adı</Label>
                <Input
                  id="storeName"
                  {...register('store.name', {
                    required: 'Mağaza adı gereklidir',
                    minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' }
                  })}
                />
                {errors.store?.name && <p className="text-sm text-red-500">{errors.store.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="storePhone">Mağaza Telefonu</Label>
                <Input
                  id="storePhone"
                  {...register('store.phone', {
                    required: 'Mağaza telefonu gereklidir',
                    pattern: {
                      value: /^(\+90|0)?[1-9][0-9]{9}$/,
                      message: 'Geçersiz Türkiye telefon numarası'
                    }
                  })}
                />
                {errors.store?.phone && <p className="text-sm text-red-500">{errors.store.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeTaxId">Mağaza Vergi Numarası</Label>
                <Input
                  id="storeTaxId"
                  {...register('store.tax_no', {
                    required: 'Mağaza Vergi Numarası gereklidir',
                    pattern: {
                      value: /^T\d{3}V\d{6}$/,
                      message: 'Geçersiz Vergi Numarası formatı (TXXXVXXXXXX)'
                    }
                  })}
                />
                {errors.store?.tax_no && <p className="text-sm text-red-500">{errors.store.tax_no.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeBankAccount">Mağaza Banka Hesabı (IBAN)</Label>
                <Input
                  id="storeBankAccount"
                  {...register('store.bank_account', {
                    required: 'Mağaza Banka Hesabı gereklidir',
                    pattern: {
                      value: /^TR\d{2}\d{5}\d{1}\d{16}$/,
                      message: 'Geçersiz IBAN formatı'
                    }
                  })}
                />
                {errors.store?.bank_account && <p className="text-sm text-red-500">{errors.store.bank_account.message}</p>}
              </div>
            </>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Kaydediliyor...
              </>
            ) : (
              'Kayıt Ol'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}