import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto text-lg mt-16">
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-span-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <h3 className="my-6">Greetings from Baccpacc!</h3>
          <p className="my-6">
            Baccpacc aims to develop a platform that encourages travel and
            exploration - through collaborative efforts. At Baccpacc we
            prioritize privacy and transparency. This Privacy Policy describes
            what information we collect, how we use said information and how we
            protect your right to privacy. When used in these document, [ “
            <b>Baccpacc</b>”, “<b>we</b>”, “<b>us</b>”, “<b>our</b>”, “
            <b>Company</b>” ] refers to Baccpacc and its entities.
          </p>
          <p className="my-6">
            Undefined terms in this Privacy Policy have the same definition as
            in our Terms of Service [{" "}
            <Link
              to={"/terms-and-conditions"}
              className="font-bold text-primary"
            >
              "Terms"
            </Link>
            ]. Your continued use of the service, means that you agree to our
            Privacy Policy.
          </p>
          <h1 className="my-12 font-bold">
            Please read this Privacy Policy carefully before you start using the
            App.
          </h1>
          {/* First Section */}
          <h2 className="mt-12 text-xl font-bold">1. INFORMATION WE COLLECT</h2>
          <p className="my-6">We collect the following types of information:</p>
          <h2 className="font-bold">1.1. Information that you provide.</h2>
          <p className="my-4">
            Personally identifiable information may include, but is not limited
            to:
          </p>
          <ul className="list-disc">
            <li className="mt-4 mx-4">
              Your username, password and name when you register for an Baccpacc
              account.
            </li>
            <li className="mt-4 mx-4">
              Your phone number which is necessary for using the Service.
            </li>
            <li className="mt-4 mx-4">
              Profile information that you provide for user profile such as
              email, bio, location (Address, State, Province, ZIP/Postal code,
              City, Country)
            </li>
            <li className="mt-4 mx-4">
              User Content (e.g. photos, comments, notes, announcements and
              other material(s)) that you post to the Service.
            </li>
          </ul>
          <h2 className="mt-10 font-bold">
            1.2. Information from Third-Party Social Media Services.
          </h2>
          <p className="my-2">
            You can also use Google and Facebook to create an account and log in
            to the Service. If You decide to register through or otherwise grant
            us access to a Third-Party Social Media Service, we may collect
            personal data that is already associated with your Third-Party
            Social Media Service's account, such as your name, your email
            address, your activities or your contact list associated with that
            account.
          </p>
          <p className="my-4">
            For Gmail, we will receive your email and Google account ID to help
            us authenticate you when signing in.
          </p>
          <p className="my-4">
            For Facebook, we will receive your basic profile information (your
            name, Facebook account ID) which we will use to authenticate you
            when signing in.
          </p>
          <h2 className="mt-10 font-bold">1.3. Usage data.</h2>
          <p className="my-2">
            We may collect data during your use of the Service.
          </p>
          <ul className="list-disc">
            <li className="mt-4 mx-4">
              Your device’s IP Address, device Advertising ID, the pages of
              Service you visit, the time and date of your visit, the time spent
              on these pages and other diagnostic data.
            </li>
            <li className="mt-4 mx-4">
              Type of mobile device, mobile device unique ID, mobile operating
              system, unique device identifiers.
            </li>
          </ul>
          <h2 className="mt-10 font-bold">
            1.4. Information from use of the Service.
          </h2>
          <p className="my-2">
            While using the Service, to use some of its features we may require
            the following data, which we collect with your prior permission.
          </p>
          <ul className="list-disc">
            <li className="mt-4 mx-4">Information regarding your location.</li>
            <li className="mt-4 mx-4">
              Access to make calls and contact lists.
            </li>
            <li className="mt-4 mx-4">
              Pictures and other information from your device's camera and photo
              library.
            </li>
          </ul>
          {/* Second Section */}
          <h2 className="mt-16 text-xl font-bold">2. COOKIES</h2>
          <p className="my-2">
            Cookies are small text files placed in your device and are commonly
            used on the internet. We use cookies and similar technologies to
            store information regarding:
          </p>
          <ul className="list-disc">
            <li className="mt-4 mx-4">Visitor’s preferences</li>
            <li className="mt-4 mx-4">
              Their browsing history (pages and time).
            </li>
          </ul>
          {/* Section Three */}
          <h2 className="mt-16 text-xl font-bold">
            3. THIRD PARTY PRIVACY POLICIES.
          </h2>
          <p className="my-2">
            Our Privacy Policy does not apply to other advertisers or websites
            or services that we use from them. Please advise the respective
            Privacy Policy, specifically Google Firebase for more detailed
            information.
          </p>

          {/* Section Four */}
          <h2 className="mt-16 text-xl font-bold">
            4. WHY DO WE COLLECT THESE DATA.
          </h2>
          <ul className="list-disc">
            <li className="mt-4 mx-4">
              To provide, maintain and monitor the usage of the Service.
            </li>
            <li className="mt-4 mx-4">
              When you register as a user, you are given access to different
              functionalities of the Service.
            </li>
            <li className="mt-4 mx-4">
              To contact you by email, or other equivalent forms of electronic
              communication, such as mobile application’s push notifications
              regarding updates, security updates or when necessary or
              reasonable for their implementation.
            </li>
            <li className="mt-4 mx-4">
              To provide you with special offers and newsletters if you have not
              opted to receive such information.
            </li>
            <li className="mt-4 mx-4">
              To manage your feedback and requests to us.
            </li>
            <li className="mt-4 mx-4">
              Data analysis, identifying user trends.
            </li>
            <li className="mt-4 mx-4">
              Sharing of information in the following situations.
            </li>
            <ul className="list-circle mx-16">
              <li className="mt-4">
                To evaluate or conduct a merger. We may share or transfer your
                personal information in connection with, or during negotiations
                of, any merger, sale of company assets, financing or acquisition
                of all or a portion of our business to another company.
              </li>
              <li className="mt-4">
                With affiliates, in which case this Privacy Policy is honored.
              </li>
              <li className="mt-4">
                We may disclose your personal information for any other purpose
                with your consent.
              </li>
              <li className="mt-4">
                To share information between members when collaborating on the
                Service. This information includes but is not limited to full
                name, phone number, past trips, profile information, usage
                activities and email address.
              </li>
            </ul>
          </ul>

          {/* Section Five */}
          <h2 className="mt-16 text-xl font-bold">
            5. RETENTION OF YOUR PERSONAL DATA.
          </h2>
          <p className="my-2">
            We will retain your personal data only for as long as is necessary
            for the purposes set out in this Privacy Policy, and in need of
            compliance with any legal obligations (to resolve disputes and
            enforce our legal agreements and policies). Data can also be
            retained for an internal analysis process.
          </p>

          {/* Section Six */}
          <h2 className="mt-16 text-xl font-bold">6. DELETION OF DATA.</h2>
          <p className="my-2">
            If you need to delete your data, please contact at{" "}
            <span className="font-bold">privacy@baccpacc.com</span> and all data
            will be deleted within 1 months of the request.
          </p>

          {/* Section Seven */}
          <h2 className="mt-16 text-xl font-bold">
            7. HOW WE PROTECT YOUR DATA.
          </h2>
          <p className="my-2">
            Your personal information is kept strictly confidential and fully
            secure. Your encrypted (encoded) information is protected using SSL
            [Secure Socket Layers] and we follow industry standards to receive,
            send and store data. But it is also necessary to mention that no
            method of security is 100% secure, so we cannot guarantee its
            absolute security.
          </p>

          {/* Section Eight */}
          <h2 className="mt-16 text-xl font-bold">
            8. CHILDREN'S PRIVACY POLICY.
          </h2>
          <p className="my-4">
            We do not knowingly collect any kind of identifiable information
            from under the age of 13. If anyone knows of a child that is using
            our Service and providing their personal information, we strongly
            encourage you to contact us immediately. We will remove all
            information promptly.
          </p>

          {/* Section Nine */}
          <h2 className="mt-16 text-xl font-bold">
            9. CHANGES TO OUR PRIVACY POLICY.
          </h2>
          <p className="my-4">
            We may make changes to our Privacy Policy from time to time. We will
            immediately provide you with a notification regarding our changes to
            the Policy. Your continued use of the service means that you agree
            to the changes.
          </p>

          {/* Section Ten */}
          <h2 className="mt-16 text-xl font-bold">10. CONTACT US</h2>
          <p className="my-4">
            Please submit any questions or concerns regarding our Privacy Policy
            or any questions about the security of our App or Services to:
          </p>
          <p className="my-4">
            <span className="font-bold">privacy@baccpacc.com</span>
          </p>
          <p className="my-12">
            This Privacy Policy was last updated on 06 February 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
