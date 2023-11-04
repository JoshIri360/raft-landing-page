import Logo from "../assets/logo2.png";
import apple from "../assets/Footer/apple.png";
import playstore from "../assets/Footer/playstore.png";
import qrcode from "../assets/Footer/qr-code.png";

const Footer = () => {
  const footerSections = [
    { title: "About us", footerList: ["Our company", "Careers", "Press kits"] },
    {
      title: "Legal",
      footerList: ["Terms of use", "Privacy policy", "About us"],
    },
    { title: "Support", footerList: ["Contact us", "FAQ"] },
  ];

  return (
    <div className="universal-margin">
      <div className="w-full border-b pb-8">
        <div className="logo w-52">
          <img src={Logo} className="w-full" alt="Logo" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-10">
        <div className="download-app col-span-2 sm:col-span-3 lg:col-span-2 max-w-sm rounded-md flex justify-center gap-2 p-5">
          <div className="qr w-32">
            <img src={qrcode} alt="qrcode" className="w-full" />
          </div>
          <div className="flex flex-col justify-between">
            <div>Scan to download App on the Playstore and Appstore.</div>
            <div className="flex gap-3">
              <div className="playstore">
                <img src={playstore} alt="playstore" />
              </div>
              <div className="appstore">
                <img src={apple} alt="apple" />
              </div>
            </div>
          </div>
        </div>
        {footerSections.map((section, i) => {
          return (
            <ul className="child:pb-2" key={i}>
              <li className="font-semibold">{section.title}</li>
              {section.footerList.map((footerListItem, i) => {
                return (
                  <li className="hover:underline" key={i}>
                    {footerListItem}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
