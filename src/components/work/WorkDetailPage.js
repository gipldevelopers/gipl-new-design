import DetailLayout from "@/components/DetailLayout";

export default function WorkDetailPage({ item, relatedItems }) {
  return (
    <DetailLayout
      title={item.projectName}
      heroDescription={`${item.description} From custom development to product engineering, API integrations, cloud-ready systems, and enterprise solutions, we deliver technology that improves efficiency and drives long-term digital growth with our expertise in software, data, and digital solutions.`}
      heroImage={item.detailImage || item.images[0]}
      heroImageAlt={item.projectName}
      relatedItems={relatedItems}
      relatedPathPrefix="/work"
      sections={[
        {
          heading:
            "Why Every Business Must Invest in Mobile App Development Services in 2026",
          paragraphs: [
            "Running a successful business in 2026 means doing far more than just maintaining a website. The digital landscape has fundamentally shifted and mobile is now at the centre of it. If your business still has not launched a dedicated mobile app, you are leaving real money, real customers, and real growth on the table. A mobile app gives you a direct, always-on connection with your audience and that delivers genuine value every single time they pick up their phone.",
            "In this project, we explored how exactly why investing in professional mobile app development services makes strong business sense right now. We broke down the biggest industry trends, showed how the right app creates measurable ROI, and built a delivery path that aligned engineering with business outcomes.",
          ],
        },
        {
          heading: "The Real Business Case for a Mobile App in 2026",
          paragraphs: [
            "So why does your business actually need a mobile app? It comes down to one simple truth: your customers are on their phones constantly. A well-built app puts your brand right in their hands, available 24/7, with a level of speed and personalization that no website or social media post can match.",
            "Think about it. People unlock their smartphones dozens of times a day. When your app is sitting on their home screen, you have consistent, direct access to their attention. That kind of visibility and engagement is something traditional digital channels simply cannot replicate.",
          ],
        },
        {
          type: "imageText",
          heading: "Key Mobile App Development Trends Shaping 2026",
          image: item.detailImage || item.images[0],
          imageAlt: item.projectName,
          paragraphs: [
            "The mobile industry does not stand still, and neither should your business strategy. Right now, several major trends are reshaping how apps are built and how users interact with them. Fast-loading architecture and cloud-ready delivery helped this product stay aligned with those shifts.",
            "AI and Machine Learning are no longer optional enhancements in premium digital products. They now shape the way users discover content, receive recommendations, and interact with support systems. That shift informed how this work was structured from the beginning.",
          ],
        },
        {
          heading: "5G Is Unlocking a New Generation of Apps",
          paragraphs: [
            "The rapid rollout of 5G networks has completely changed what is possible in mobile app development. Ultra-fast speeds and near-zero latency mean apps can now do things that were not practical just a couple of years ago.",
            "For product teams, this changes the ceiling on user experience. It opens the door to richer interfaces, more responsive live data, and new interaction models that help brands stand apart in competitive markets.",
          ],
        },
        {
          heading: "Wearable Technology Is Opening a New App Frontier",
          paragraphs: [
            "Smartwatches, fitness bands, and health monitors are everywhere now and they have opened up a completely new layer of mobile interaction. Apps that sync with wearable devices allow businesses to deliver quick, relevant, glanceable experiences.",
            "This extends a product usefulness across the day and creates more connected digital ecosystems. It is one of the clearest signals that product strategy now has to account for more than the phone screen alone.",
          ],
        },
        {
          heading: "Measuring the ROI of Mobile App Development",
          paragraphs: [
            "Deciding to invest in mobile app development services is a big move, and it is fair to want clarity on what you will get back. The good news is that the ROI of a well-built app shows up in multiple ways not just in direct sales, but in long-term business value that keeps compounding over time.",
          ],
          bullets: [
            "Revenue Growth through clearer purchasing journeys, subscriptions, and feature-led upsell paths.",
            "Customer Lifetime Value improvements driven by stronger retention and more frequent engagement.",
            "Operational Cost Reduction through automation, self-service, and lower manual coordination overhead.",
            "Brand Perception and Market Position gains from launching a polished, reliable, high-quality product experience.",
          ],
        },
      ]}
    />
  );
}
