import { SubscriberData } from "@/types/general";


export const SubsData: SubscriberData = {
    firstname: "John",
    surname: "Doe",
    othernames: "William",
    user: {
      email: "john.doe@example.com",
    },
    date_of_birth: "1990-01-15",
    nationality: "American",
    phone: "+1-234-567-890",
    title: "Mr.",
    residential_address: "123 Elm Street, Springfield, IL",
    marital_status: "Single",
    occupation: "Software Engineer",
    place_of_work: "TechCorp Inc.",
    office_address: "456 Tech Park, Silicon Valley, CA",
    number_of_unit_applied: 2,
    how_you_heard: "Online Advertisement",
    next_of_kin: "Jane Doe",
    relationship: "Sister",
    status: "Active",
    preferred_payment_option: "Credit Card",
    subscriberAttachment: [
      {
        id: 1,
        document_name: "Passport Copy",
        file: "https://example.com/files/passport.pdf",
      },
      {
        id: 2,
        document_name: "Utility Bill",
        file: "https://example.com/files/utility-bill.pdf",
      },
    ],
    subscriberProject: [
      {
        id: 1,
        subscriber_id: 101,
        project: {
          name: "Project Alpha",
          title: "Affordable Housing Initiative",
        },
      },
      {
        id: 2,
        subscriber_id: 101,
        project: {
          name: "Project Beta",
          title: "Luxury Apartment Development",
        },
      },
    ],
  };
  