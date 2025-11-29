import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Camera, Upload, CreditCard, ShieldCheck } from "lucide-react";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../constants/routes";

const ChefRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    kitchenName: '',
    address: '',
    city: 'Dhaka',
    nid: '',
    bkash: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  const handleSubmit = () => {
    navigate(ROUTES.REGISTRATION_SUCCESS);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-teal-800 p-4">
        <button 
          onClick={() => navigate(ROUTES.HOME)} 
          className="text-white flex items-center gap-2"
        >
          <ArrowLeft size={20}/> Back to Home
        </button>
      </div>
      
      <div className="flex-1 max-w-2xl mx-auto w-full p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-100 h-2 w-full">
            <div 
              className="bg-yellow-400 h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-teal-900 mb-2">Become a Chef</h2>
              <p className="text-gray-500">
                Step {step} of 3: {step === 1 ? 'Personal Info' : step === 2 ? 'Kitchen Details' : 'Verification'}
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name (As per NID)
                  </label>
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                    placeholder="e.g. Salma Begum" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                    placeholder="017..." 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                    placeholder="you@example.com" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
                <Button fullWidth onClick={handleNext} className="mt-6">
                  Next Step <ArrowRight size={18}/>
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kitchen Name
                  </label>
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                    placeholder="e.g. Maa-er Ranna" 
                    value={formData.kitchenName} 
                    onChange={e => setFormData({...formData, kitchenName: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Address
                  </label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                    rows="3" 
                    placeholder="Full address for delivery pickup" 
                    value={formData.address} 
                    onChange={e => setFormData({...formData, address: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Kitchen Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <Camera className="mx-auto mb-2 text-gray-400"/>
                    <span className="text-sm">Click to upload a photo of your cooking area</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button onClick={handleBack} variant="secondary" className="flex-1">Back</Button>
                  <Button onClick={handleNext} className="flex-1">
                    Next Step <ArrowRight size={18}/>
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-blue-800 text-sm mb-6">
                  <ShieldCheck size={20} className="shrink-0"/>
                  We verify every chef to ensure food safety and trust. Your data is secure.
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    National ID (NID) Number
                  </label>
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                    placeholder="NID Number" 
                    value={formData.nid} 
                    onChange={e => setFormData({...formData, nid: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload NID Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 hover:bg-gray-50 cursor-pointer flex items-center justify-center gap-2">
                    <Upload size={18}/> Upload Front Side
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bkash/Nagad Number (For Payments)
                  </label>
                  <div className="relative">
                    <input 
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" 
                      placeholder="017..." 
                      value={formData.bkash} 
                      onChange={e => setFormData({...formData, bkash: e.target.value})} 
                    />
                    <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button onClick={handleBack} variant="secondary" className="flex-1">Back</Button>
                  <Button onClick={handleSubmit} className="flex-1 bg-teal-800 hover:bg-teal-900 text-white">
                    Submit Application
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRegistration;

