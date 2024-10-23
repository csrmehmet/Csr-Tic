import { contactData } from '../data';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Gradient */}
      <div 
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 50, 67, 0.9) 0%, rgba(0, 150, 199, 0.9) 50%, transparent 100%), url('/src/assets/shop-hero-1-product-slide-1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center'  // Kadını sağ tarafa konumlandırır
  }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <h1 className="text-5xl font-bold text-white mb-6">
              {contactData.title}
            </h1>
            <p className="text-white mb-8 opacity-80">
              {contactData.description}
            </p>
            <Button variant="default" size="lg" className="bg-primary text-white">
              {contactData.buttonText}
            </Button>
          </div>

          {/* Right Section */}
          <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:ml-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-white">
    {contactData.officeLocations.map((office, index) => (
      <div key={index} className="space-y-4">
        <h3 className="text-3xl font-bold">{office.city}</h3>
        <div className="space-y-4">
          <p className="font-bold text-xl">{office.address}</p>
          <div className="w-16 h-0.5 bg-primary"></div> 
          <p className="font-bold text-lg">{office.postalCode}</p>
          <p className="font-bold">
            {contactData.phoneTitle} : {office.phone}
          </p>
          <p className="font-bold">
            {contactData.faxTitle} : {office.fax}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;