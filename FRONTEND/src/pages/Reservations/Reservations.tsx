import React, { useState, useEffect } from "react";
import {
  CreditCard,
  Lock,
  Calendar,
  Eye,
  EyeOff,
  Check,
  Wifi,
  Apple,
} from "lucide-react";

interface PaymentFormProps {
  orderDetails?: {
    company: string;
    orderNumber: string;
    product: string;
    vat: number;
    total: number;
  };
}

interface FormData {
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
  password: string;
}

type FormErrors = {
  [K in keyof FormData]?: string;
};

const Reservations: React.FC<PaymentFormProps> = ({
  orderDetails = {
    company: "Apple",
    orderNumber: "1266201",
    product: "MacBook Air",
    vat: 100.0,
    total: 549.99,
  },
}) => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cvc: "",
    expiryMonth: "",
    expiryYear: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatCardNumber = (value: string): string => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Card number validation
    const cardNumberClean = formData.cardNumber.replace(/\s/g, "");
    if (!cardNumberClean || cardNumberClean.length < 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    // CVC validation
    if (!formData.cvc || formData.cvc.length < 3) {
      newErrors.cvc = "CVC must be 3-4 digits";
    }

    // Expiry validation
    if (!formData.expiryMonth || !formData.expiryYear) {
      newErrors.expiryMonth = "Please enter expiry date";
      newErrors.expiryYear = "Please enter expiry date";
    }

    // Password validation
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    let processedValue = value;

    if (field === "cardNumber") {
      processedValue = formatCardNumber(value);
      if (processedValue.replace(/\s/g, "").length > 16) return;
    } else if (field === "cvc") {
      processedValue = value.replace(/[^0-9]/g, "").substring(0, 4);
    } else if (field === "expiryMonth") {
      processedValue = value.replace(/[^0-9]/g, "").substring(0, 2);
      if (parseInt(processedValue) > 12) processedValue = "12";
    } else if (field === "expiryYear") {
      processedValue = value.replace(/[^0-9]/g, "").substring(0, 2);
    }

    setFormData((prev) => ({ ...prev, [field]: processedValue }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsProcessing(false);
        // Reset form
        setFormData({
          cardNumber: "",
          cvc: "",
          expiryMonth: "",
          expiryYear: "",
          password: "",
        });
      }, 2000);
    } catch (error) {
      setIsProcessing(false);
    }
  };

  const getCardBrand = (number: string): string => {
    const cleanNumber = number.replace(/\s/g, "");
    if (cleanNumber.startsWith("4")) return "visa";
    if (cleanNumber.startsWith("5")) return "mastercard";
    return "generic";
  };

  const getLastFourDigits = (): string => {
    const cleanNumber = formData.cardNumber.replace(/\s/g, "");
    return cleanNumber.length >= 4 ? cleanNumber.slice(-4) : "3456";
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              <span className="text-white font-medium">PointCard™</span>
            </div>
            <div className="text-white text-lg">0 1 : 1 9</div>
          </div>

          {/* Card Preview */}
          <div className="mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Wifi className="w-6 h-6" />
                </div>
                <div className="mt-8">
                  <div className="text-sm opacity-70">Jonothon Michael</div>
                  <div className="text-lg font-mono">
                    •••• {getLastFourDigits()}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">
                    POINT
                  </div>
                  <div className="text-xs opacity-70">VISA DEBIT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Apple className="w-5 h-5 text-white" />
              <span className="text-white font-medium">
                {orderDetails.company}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Order Number</span>
                <span>{orderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Product</span>
                <span>{orderDetails.product}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>VAT (20%)</span>
                <span>${orderDetails.vat.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex justify-between text-white font-semibold">
                  <span>You have to Pay</span>
                  <span>${orderDetails.total.toFixed(2)} USD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-4">
            {/* Card Number */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    handleInputChange("cardNumber", e.target.value)
                  }
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <CreditCard className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
              {errors.cardNumber && (
                <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            {/* CVC and Expiry */}
            <div className="flex space-x-3">
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  CVC Number
                </label>
                <input
                  type="text"
                  value={formData.cvc}
                  onChange={(e) => handleInputChange("cvc", e.target.value)}
                  placeholder="123"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                {errors.cvc && (
                  <p className="text-red-400 text-xs mt-1">{errors.cvc}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  Expiry Date
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.expiryMonth}
                    onChange={(e) =>
                      handleInputChange("expiryMonth", e.target.value)
                    }
                    placeholder="MM"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors text-center"
                  />
                  <span className="text-white self-center">/</span>
                  <input
                    type="text"
                    value={formData.expiryYear}
                    onChange={(e) =>
                      handleInputChange("expiryYear", e.target.value)
                    }
                    placeholder="YY"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors text-center"
                  />
                </div>
                {(errors.expiryMonth || errors.expiryYear) && (
                  <span>{errors.expiryMonth || errors.expiryYear}</span>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full w-5 h-5 border-2 border-white border-t-transparent"></div>
                  <span>Processing...</span>
                </>
              ) : isSuccess ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Payment Successful!</span>
                </>
              ) : (
                <span>Pay Now</span>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Payment Form */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">P</span>
                </div>
                <span className="text-white font-semibold text-lg">
                  PointCard™
                </span>
              </div>
              <div className="text-white text-xl font-mono">0 1 : 1 9</div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Card Number */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Card Number
                  <span className="text-gray-400 text-xs ml-2">
                    Enter the 16-digit card number on the card
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    placeholder="2412 - 7512 - 3412 - 3456"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors pr-20"
                  />
                  <div className="absolute right-3 top-4 flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {errors.cardNumber && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              {/* CVC Number */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  CVC Number
                  <span className="text-gray-400 text-xs ml-2">
                    Enter the 3 or 4 digit number on the card
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.cvc}
                    onChange={(e) => handleInputChange("cvc", e.target.value)}
                    placeholder="327"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                {errors.cvc && (
                  <p className="text-red-400 text-xs mt-1">{errors.cvc}</p>
                )}
              </div>

              {/* Expiry Date */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Expiry Date
                  <span className="text-gray-400 text-xs ml-2">
                    Enter the expiration date of the card
                  </span>
                </label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={formData.expiryMonth}
                    onChange={(e) =>
                      handleInputChange("expiryMonth", e.target.value)
                    }
                    placeholder="09"
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors text-center"
                  />
                  <span className="text-white text-2xl self-center">/</span>
                  <input
                    type="text"
                    value={formData.expiryYear}
                    onChange={(e) =>
                      handleInputChange("expiryYear", e.target.value)
                    }
                    placeholder="22"
                    className="flex-1 bg-purple-600 border border-purple-500 rounded-lg px-4 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-purple-400 transition-colors text-center"
                  />
                </div>
                {(errors.expiryMonth || errors.expiryYear) && (
                  <span>{errors.expiryMonth || errors.expiryYear}</span>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Password
                  <span className="text-gray-400 text-xs ml-2">
                    Enter your dynamic password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="••••••••"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-4 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full w-5 h-5 border-2 border-white border-t-transparent"></div>
                    <span>Processing...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Payment Successful!</span>
                  </>
                ) : (
                  <span>Pay Now</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Card and Order Summary */}
          <div className="w-full lg:w-96 bg-gray-900 p-8 flex flex-col">
            {/* Card Preview */}
            <div className="mb-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
                  {/* Chip */}
                  <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md mb-4"></div>

                  {/* Wireless icon */}
                  <div className="absolute top-6 right-6">
                    <Wifi className="w-6 h-6 text-gray-300" />
                  </div>

                  {/* Card details */}
                  <div className="mt-8">
                    <div className="text-sm text-gray-300 mb-1">
                      Jonothon Michael
                    </div>
                    <div className="text-lg font-mono tracking-wider">
                      •••• {getLastFourDigits()}
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="flex justify-between items-end mt-6">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">
                      POINT
                    </div>
                    <div className="text-xs text-gray-400">
                      {getCardBrand(formData.cardNumber).toUpperCase()} DEBIT
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white opacity-5 rounded-full"></div>
                  <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-800 rounded-xl p-6 flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <Apple className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">
                  {orderDetails.company}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Order Number</span>
                  <span className="text-white font-medium">
                    {orderDetails.orderNumber}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Product</span>
                  <span className="text-white font-medium">
                    {orderDetails.product}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">VAT (20%)</span>
                  <span className="text-white font-medium">
                    ${orderDetails.vat.toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">You have to Pay</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold text-xl">
                        {orderDetails.total.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400">USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
