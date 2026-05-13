import ServiceDetailHeroSection from "@/components/service-detail/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/service-detail/ServiceDetailWhyChooseSection";
import ServiceDetailProcessSection from "@/components/service-detail/ServiceDetailProcessSection";
import ServiceDetailServicesSection from "@/components/service-detail/ServiceDetailServicesSection";

export default function ServiceDetailPageSections({ service }) {
  return (
    <>
      <ServiceDetailHeroSection service={service} />
      <ServiceDetailWhyChooseSection 
        items={service.whyChoose} 
        serviceName={service.title} 
        icons={service.whyChooseIcons} 
      />
      <ServiceDetailProcessSection 
        items={service.process} 
        subtitle={service.processSubtitle} 
      />
      <ServiceDetailServicesSection items={service.services} />
    </>
  );
}
