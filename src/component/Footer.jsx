import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-[#001ac3] to-[#051876] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-extralight text-yellow-500">Manufactured by:</h3>
            <h3 className="text-2xl font-bold mb-2 text-yellow-500">Naryan Dairy</h3>   
            <p className="text-xl">FSSAI Lic No: 11419890000046</p>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-location-dot text-yellow-500"></i>
              <p className="text-sm">Vill Panwa, Opp-Satmata Mandir Tehsil Kasrawadi</p>
            </div>
            <p className="text-sm">Dist-Khargone, Kasrwada (Madhya Pradesh)</p>
          </div>
          
          {/* Registered Office */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-500">Regd. Office:</h3>   
            <p className="text-xl">FSSAI Lic No: 11514015000345</p>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-location-dot text-yellow-500"></i>
              <p className="text-sm">Plot: W-413, Rabale MIDC, T.T.C. Industrial</p>
            </div>
            <p className="text-sm">Area, T.B. Road, Navi Mumbai - 4000701</p>
          </div>

          {/* Our 2 Branches */}
          <div>
            <div className='flex items-center space-x-2 mb-3'>
              <i className="fa-solid fa-shop text-yellow-500"></i>
              <h3 className="text-2xl font-bold text-yellow-500">Our Branches:</h3>
            </div>

            {/* Branch 1 */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-location-dot text-yellow-500"></i>
                <p className="text-sm">Mangal Murty Complex, Build No. 10 D-wing</p>
              </div>
              <p className="text-sm">Shop No 1 & 2, Jijabai Bhosle Marg, Mankhurd West</p>
              <p className="text-sm">Mumbai - 400043</p>
            </div>

            {/* Branch 2 */}
            <div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-location-dot text-yellow-500"></i>
                <p className="text-sm">Shop No. 12, Build. No. 01, A-Wing, Shree Dhanalaxmi</p>
              </div>
              <p className="text-sm">Ekveera Apt., Regency Road, Dombivali East</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-yellow-500">Consumer Care No :</h3>
            <p className="text-sm"><i className="fa-solid fa-phone text-yellow-500"></i> +91 9820697777</p>
            <p className="text-sm"><i className="fa-solid fa-phone text-yellow-500"></i> +91 9588777773</p>
            <p className="text-sm"><i className="fa-solid fa-phone text-yellow-500"></i> +91 9172297777</p>
            <p className="text-sm"><i className="fa-solid fa-envelope text-yellow-500"></i> naryandairy.milk@gmail.com</p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-6 border-t border-yellow-500 pt-4">
          <p className="text-center text-sm">&copy; 2024 Naryan Dairy. All rights reserved.</p>

        </div>
      </footer>
    );
};

export default Footer;
