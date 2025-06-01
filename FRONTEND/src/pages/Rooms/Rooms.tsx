import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/footer/footer";
import SocialMedia from "../../components/common/socialMedia/SocialMedia";
import {PaymentGatewayModal, RoomCard, RoomFilter, RoomModal} from "../../components/specific/rooms/index";
import type {
 Room,
 BookingState,
 RoomCategory,
} from "../../components/specific/rooms/RoomInterfaces";
import {
 Users,
 Wifi,
 Coffee,
 Car,
 Bath,
 Tv,
 Wind,
 Sparkles,
 Star,
 MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/images/background/v6.jpg";

const Rooms: React.FC = () => {
 const { t } = useTranslation();

 const [selectedCategory, setSelectedCategory] = useState("all");
 const [searchTerm, setSearchTerm] = useState("");
 const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const [bookingData, setBookingData] = useState<BookingState>({
  checkIn: "",
  checkOut: "",
  guests: 1,
  roomId: null,
  email: "",
 });
 const [showPaymentGateway, setShowPaymentGateway] = useState(false);
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
  const handleResize = () => {
   setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 useEffect(() => {
  const timer = setTimeout(() => setIsLoaded(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const categories: RoomCategory[] = [
  { id: "all", name: t("filterSection.allCategories") },
  { id: "standard", name: t("filterSection.standard") },
  { id: "deluxe", name: t("filterSection.deluxe") },
  { id: "villa", name: "Villa" },
 ];

 const roomTypes: Room[] = [
  {
   id: 1,
   name: t("roomTypes.standardRoom.name"),
   description: t("roomTypes.standardRoom.description"),
   fullDescription: t("roomTypes.standardRoom.fullDescription"),
   price: 150,
   images: [
    "/assets/images/rooms/standard1.jpg",
    "/assets/images/rooms/standard2.jpg",
    "/assets/images/rooms/standard3.jpg",
    "/assets/images/rooms/standard4.jpg",
   ],
   category: "standard",
   features: [
    t("roomTypes.standardRoom.features.wifi"),
    t("roomTypes.standardRoom.features.breakfast"),
    t("roomTypes.standardRoom.features.ac"),
    t("roomTypes.standardRoom.features.tv"),
   ],
   capacity: 2,
   bedType: t("roomTypes.standardRoom.bedType"),
   size: "25 m²",
   amenities: [
    { icon: Wifi, name: t("roomTypes.standardRoom.amenities.wifi") },
    { icon: Coffee, name: t("roomTypes.standardRoom.amenities.breakfast") },
    { icon: Wind, name: t("roomTypes.standardRoom.amenities.ac") },
    { icon: Tv, name: t("roomTypes.standardRoom.amenities.tv") },
    { icon: Bath, name: t("roomTypes.standardRoom.amenities.privateBath") },
   ],
  },
  {
   id: 2,
   name: t("roomTypes.deluxeSuite.name"),
   description: t("roomTypes.deluxeSuite.description"),
   fullDescription: t("roomTypes.deluxeSuite.fullDescription"),
   price: 300,
   images: [
    "/assets/images/rooms/deluxe1.jpg",
    "/assets/images/rooms/deluxe2.jpg",
    "/assets/images/rooms/deluxe3.jpg",
    "/assets/images/rooms/deluxe4.jpg",
    "/assets/images/rooms/deluxe5.jpg",
   ],
   category: "deluxe",
   features: [
    t("roomTypes.deluxeSuite.features.wifi"),
    t("roomTypes.deluxeSuite.features.gourmetBreakfast"),
    t("roomTypes.deluxeSuite.features.livingRoom"),
    t("roomTypes.deluxeSuite.features.minibar"),
    t("roomTypes.deluxeSuite.features.privateBalcony"),
   ],
   capacity: 3,
   bedType: t("roomTypes.deluxeSuite.bedType"),
   size: "45 m²",
   amenities: [
    { icon: Wifi, name: t("roomTypes.deluxeSuite.amenities.wifi") },
    {
     icon: Coffee,
     name: t("roomTypes.deluxeSuite.amenities.gourmetBreakfast"),
    },
    { icon: Wind, name: t("roomTypes.deluxeSuite.amenities.ac") },
    { icon: Tv, name: t("roomTypes.deluxeSuite.amenities.tv") },
    { icon: Bath, name: t("roomTypes.deluxeSuite.amenities.luxuryBath") },
    { icon: Car, name: t("roomTypes.deluxeSuite.amenities.minibar") },
   ],
  },
  {
   id: 3,
   name: t("roomTypes.privatePoolVilla.name"),
   description: t("roomTypes.privatePoolVilla.description"),
   fullDescription: t("roomTypes.privatePoolVilla.fullDescription"),
   price: 600,
   images: [
    "/assets/images/rooms/villa1.jpg",
    "/assets/images/rooms/villa2.jpg",
    "/assets/images/rooms/villa3.jpg",
    "/assets/images/rooms/villa4.jpg",
    "/assets/images/rooms/villa5.jpg",
    "/assets/images/rooms/villa6.jpg",
   ],
   category: "villa",
   features: [
    t("roomTypes.privatePoolVilla.features.privatePool"),
    t("roomTypes.privatePoolVilla.features.exclusiveTerrace"),
    t("roomTypes.privatePoolVilla.features.butlerService"),
    t("roomTypes.privatePoolVilla.features.romanticDinner"),
    t("roomTypes.privatePoolVilla.features.vipTransfer"),
   ],
   capacity: 4,
   bedType: t("roomTypes.privatePoolVilla.bedType"),
   size: "120 m²",
   amenities: [
    { icon: Wifi, name: t("roomTypes.privatePoolVilla.amenities.wifi") },
    {
     icon: Coffee,
     name: t("roomTypes.privatePoolVilla.amenities.butlerService"),
    },
    { icon: Wind, name: t("roomTypes.privatePoolVilla.amenities.ac") },
    { icon: Tv, name: t("roomTypes.privatePoolVilla.amenities.tv") },
    {
     icon: Bath,
     name: t("roomTypes.privatePoolVilla.amenities.luxuryBath"),
    },
    {
     icon: Car,
     name: t("roomTypes.privatePoolVilla.amenities.vipTransfer"),
    },
   ],
  },
  {
   id: 4,
   name: t("roomTypes.familySuite.name"),
   description: t("roomTypes.familySuite.description"),
   fullDescription: t("roomTypes.familySuite.fullDescription"),
   price: 400,
   images: [
    "/assets/images/rooms/family1.jpg",
    "/assets/images/rooms/family2.jpg",
    "/assets/images/rooms/family3.jpg",
    "/assets/images/rooms/family4.jpg",
   ],
   category: "deluxe",
   features: [
    t("roomTypes.familySuite.features.twoBedrooms"),
    t("roomTypes.familySuite.features.playArea"),
    t("roomTypes.familySuite.features.breakfast"),
    t("roomTypes.familySuite.features.familyFridge"),
    t("roomTypes.familySuite.features.tvInEachRoom"),
   ],
   capacity: 6,
   bedType: t("roomTypes.familySuite.bedType"),
   size: "65 m²",
   amenities: [
    { icon: Wifi, name: t("roomTypes.familySuite.amenities.wifi") },
    { icon: Coffee, name: t("roomTypes.familySuite.amenities.breakfast") },
    { icon: Wind, name: t("roomTypes.familySuite.amenities.ac") },
    { icon: Tv, name: t("roomTypes.familySuite.amenities.tvInEachRoom") },
    { icon: Bath, name: t("roomTypes.familySuite.amenities.twoBathrooms") },
    { icon: Users, name: t("roomTypes.familySuite.amenities.playArea") },
   ],
  },
 ];

 const filteredRooms = roomTypes
  .filter((room) => {
   if (selectedCategory === "all") return true;
   return room.category === selectedCategory;
  })
  .filter((room) => {
   if (!searchTerm.trim()) return true;

   const searchLower = searchTerm.toLowerCase();
   return (
    room.name.toLowerCase().includes(searchLower) ||
    room.description.toLowerCase().includes(searchLower) ||
    room.fullDescription.toLowerCase().includes(searchLower) ||
    room.features.some((feature) =>
     feature.toLowerCase().includes(searchLower)
    ) ||
    room.amenities.some((amenity) =>
     amenity.name.toLowerCase().includes(searchLower)
    )
   );
  });

 const openRoomModal = (room: Room) => {
  setSelectedRoom(room);
  setCurrentImageIndex(0);
  setBookingData((prev) => ({ ...prev, roomId: room.id }));
 };

 const closeRoomModal = () => {
  setSelectedRoom(null);
  setCurrentImageIndex(0);
  setBookingData({
   checkIn: "",
   checkOut: "",
   guests: 1,
   roomId: null,
   email: "",
  });
  setShowPaymentGateway(false);
 };

 const nextImage = () => {
  if (selectedRoom) {
   setCurrentImageIndex((prev) =>
    prev === selectedRoom.images.length - 1 ? 0 : prev + 1
   );
  }
 };

 const prevImage = () => {
  if (selectedRoom) {
   setCurrentImageIndex((prev) =>
    prev === 0 ? selectedRoom.images.length - 1 : prev - 1
   );
  }
 };

 const handleBookingDataChange = (data: Partial<BookingState>) => {
  setBookingData((prev) => ({ ...prev, ...data }));
 };

 const handleConfirmBooking = () => {
  if (
   bookingData.checkIn &&
   bookingData.checkOut &&
   bookingData.guests &&
   bookingData.email &&
   selectedRoom
  ) {
   setShowPaymentGateway(true);
  } else {
   alert(t("roomModal.requiredFields"));
  }
 };

 const handlePaymentSuccess = (finalPayload: any) => {
  console.log("¡PAGO EXITOSO! JSON Final recibido en el componente Rooms:");
  console.log(JSON.stringify(finalPayload, null, 2));
  alert(t("roomModal.bookingConfirmed"));
  closeRoomModal();
 };

 const handlePaymentCancel = () => {
  setShowPaymentGateway(false);
  alert(t("roomModal.paymentCanceled"));
 };

 const handleSelectCategory = (categoryId: string) => {
  console.log("Cambiando categoría a:", categoryId);
  setSelectedCategory(categoryId);
 };

 const handleSearchTermChange = (term: string) => {
  console.log("Término de búsqueda:", term);
  setSearchTerm(term);
 };

 return (
  <div
   className={`bg-gray-900 text-white min-h-screen flex flex-col relative bg-cover bg-center transition-all duration-1000 ${
    isLoaded ? "opacity-100" : "opacity-0"
   }`}
   style={{ backgroundImage: `url(${backgroundImage})` }}
  >
   <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/60 z-0">
    <div className="absolute inset-0 overflow-hidden">
     {[...Array(isMobile ? 6 : 12)].map((_, i) => (
      <div
       key={i}
       className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"
       style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
       }}
      />
     ))}
    </div>
   </div>

   <Header logoText={t("header.logoText")} />

   <section
    className={`${isMobile ? "pt-24 pb-8" : "pt-32 pb-12"} relative z-10`}
   >
    <div className="container mx-auto px-4">
     <div
      className={`text-center mb-8 transform transition-all duration-1000 ${
       isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
     >
      <div
       className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full ${
        isMobile ? "px-4 py-1.5" : "px-6 py-2"
       } border border-amber-500/30 mb-4 group hover:scale-105 transition-transform duration-300`}
      >
       <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
       <span
        className={`text-amber-300 font-medium ${
         isMobile ? "text-xs" : "text-sm"
        }`}
       >
        {t("heroSection.badge")}
       </span>
       {!isMobile && (
        <Star className="w-4 h-4 text-amber-400 animate-pulse" />
       )}
      </div>

      <h1
       className={`${
        isMobile ? "text-3xl" : "text-5xl md:text-7xl"
       } font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent leading-tight`}
      >
       <span
        className={`block text-amber-400 ${
         isMobile ? "text-xl" : "text-3xl md:text-4xl"
        } font-light mb-2`}
       >
        {t("heroSection.discover")}
       </span>
       {t("heroSection.ourRooms")}
      </h1>

      <p
       className={`${
        isMobile ? "text-base" : "text-xl"
       } text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed ${
        isMobile ? "px-2" : ""
       }`}
      >
       {isMobile
        ? t("heroSection.descriptionMobile")
        : t("heroSection.descriptionDesktop")}
      </p>

      <div
       className={`flex ${
        isMobile ? "flex-col gap-3" : "flex-wrap justify-center gap-6"
       } mb-6`}
      >
       <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="text-2xl font-bold text-amber-400">
         {t("heroSection.statsRooms", { count: roomTypes.length })}
        </div>
        <div className="text-sm text-gray-300">
         {t("heroSection.statsRooms", { count: 0 }).split("+")[1]}
        </div>
       </div>
       <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="text-2xl font-bold text-amber-400">
         {t("heroSection.statsRating")}
        </div>
        <div className="text-sm text-gray-300">
         {t("heroSection.statsRating").split(" ")[1]}
        </div>
       </div>
       <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="text-2xl font-bold text-amber-400">
         {t("heroSection.statsService")}
        </div>
        <div className="text-sm text-gray-300">
         {t("heroSection.statsService").split(" ")[1]}
        </div>
       </div>
      </div>

      <div
       className={`${
        isMobile
         ? "flex flex-col gap-3"
         : "inline-flex items-center gap-4"
       } bg-white/10 backdrop-blur-md rounded-full ${
        isMobile ? "px-6 py-4" : "px-8 py-4"
       } border border-white/20 hover:bg-white/15 transition-all duration-300 group`}
      >
       {!isMobile && (
        <MapPin className="w-5 h-5 text-amber-400 group-hover:animate-bounce" />
       )}
       <span
        className={`text-amber-300 font-medium ${
         isMobile ? "text-sm text-center" : ""
        }`}
       >
        {isMobile
         ? t("heroSection.ctaHelpQuestionMobile")
         : t("heroSection.ctaHelpQuestionDesktop")}
       </span>
       <a
        href="/contact"
        className={`${
         isMobile ? "px-6 py-3" : "px-8 py-3"
        } bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${
         isMobile ? "text-sm" : ""
        }`}
       >
        {isMobile
         ? t("heroSection.ctaButtonMobile")
         : t("heroSection.ctaButtonDesktop")}
       </a>
      </div>
     </div>
    </div>
   </section>

   <div
    className={`relative z-10 transform transition-all duration-700 delay-300 ${
     isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
   >
    <div className="container mx-auto px-4 mb-6">
     <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl">
      <RoomFilter
       categories={categories}
       selectedCategory={selectedCategory}
       onSelectCategory={handleSelectCategory}
       searchTerm={searchTerm}
       onSearchTermChange={handleSearchTermChange}
      />
     </div>
    </div>
   </div>

   <main
    className={`flex-grow ${
     isMobile ? "py-6 px-4" : "py-12 px-4 md:px-8"
    } container mx-auto relative z-10`}
   >
    <div
     className={`mb-8 text-center transform transition-all duration-700 delay-500 ${
      isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
     }`}
    >
     <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 inline-block">
      <p
       className={`text-gray-200 ${
        isMobile ? "text-base" : "text-xl"
       } font-medium mb-3`}
      >
       {filteredRooms.length > 0
        ? t("resultsSection.resultsCount", {
         count: filteredRooms.length,
         })
        : t("resultsSection.noResults")}
      </p>

      <div
       className={`flex ${
        isMobile ? "flex-col gap-2" : "flex-wrap justify-center gap-3"
       }`}
      >
       {selectedCategory !== "all" && (
        <span
         className={`px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full ${
          isMobile ? "text-xs" : "text-sm"
         } border border-amber-500/30 font-medium`}
        >
         {t("resultsSection.categoryFilter", {
          category: categories.find(
           (cat) => cat.id === selectedCategory
          )?.name,
         })}
        </span>
       )}
       {searchTerm && (
        <span
         className={`px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full ${
          isMobile ? "text-xs" : "text-sm"
         } border border-blue-500/30 font-medium`}
        >
         {t("resultsSection.searchTerm", {
          term:
           searchTerm.length > 15 && isMobile
            ? searchTerm.substring(0, 15) + "..."
            : searchTerm,
         })}
        </span>
       )}
      </div>
     </div>
    </div>

    <div
     className={`grid ${
      isMobile
       ? "grid-cols-1 gap-6"
       : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
     }`}
    >
     {filteredRooms.map((room, index) => (
      <div
       key={room.id}
       className={`transform transition-all duration-700 ${
        isLoaded
         ? "translate-y-0 opacity-100"
         : "translate-y-8 opacity-0"
       }`}
       style={{
        transitionDelay: `${700 + index * 150}ms`,
       }}
      >
       <RoomCard room={room} onViewDetails={openRoomModal} />
      </div>
     ))}
    </div>

    {filteredRooms.length === 0 && (
     <div
      className={`text-center ${
       isMobile ? "py-12" : "py-20"
      } transform transition-all duration-700 delay-700 ${
       isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
     >
      <div
       className={`max-w-lg mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 ${
        isMobile ? "p-8" : "p-12"
       } shadow-2xl`}
      >
       <div
        className={`${isMobile ? "w-16 h-16" : "w-24 h-24"} mx-auto ${
         isMobile ? "mb-4" : "mb-8"
        } bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-amber-500/30`}
       >
        <div
         className={`${
          isMobile ? "text-2xl" : "text-4xl"
         } animate-bounce`}
        >
         🏨
        </div>
       </div>

       <h3
        className={`${
         isMobile ? "text-xl" : "text-3xl"
        } font-bold text-white mb-4`}
       >
        {isMobile
         ? t("resultsSection.noResultsTitleMobile")
         : t("resultsSection.noResultsTitleDesktop")}
       </h3>
       <p
        className={`text-gray-300 mb-6 ${
         isMobile ? "text-sm" : "text-lg"
        } leading-relaxed`}
       >
        {searchTerm
         ? t("resultsSection.noResultsSearchDescription", {
          searchTerm,
          })
         : t("resultsSection.noResultsCategoryDescription", {
          category: categories.find(
           (cat) => cat.id === selectedCategory
          )?.name,
          })}
       </p>

       <div
        className={`flex ${
         isMobile ? "flex-col gap-3" : "flex-col sm:flex-row gap-4"
        } justify-center`}
       >
        {searchTerm && (
         <button
          onClick={() => setSearchTerm("")}
          className={`${
           isMobile ? "px-6 py-3 text-sm" : "px-8 py-4"
          } bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
         >
          {isMobile
           ? t("resultsSection.clearSearchButtonMobile")
           : t("resultsSection.clearSearchButtonDesktop")}
         </button>
        )}
        <button
         onClick={() => {
          setSelectedCategory("all");
          setSearchTerm("");
         }}
         className={`${
          isMobile ? "px-6 py-3 text-sm" : "px-8 py-4"
         } bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
        >
         {isMobile
          ? t("resultsSection.viewAllButtonMobile")
          : t("resultsSection.viewAllButtonDesktop")}
        </button>
       </div>
      </div>
     </div>
    )}
   </main>

   {selectedRoom && (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out">
     <div className="absolute inset-0 transition-all duration-300 ease-out bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-xl"></div>

     <div
      className={`absolute max-h-[90vh] transition-all duration-500 ease-out
      ${
       showPaymentGateway
        ? isMobile
         ? "translate-x-full opacity-0"
         : "w-1/2 md:translate-x-[-100%] opacity-100"
        : "w-full md:w-3/4 opacity-100"
      }
      ${isMobile && showPaymentGateway ? "hidden" : "block"}
      `}
      style={
       showPaymentGateway && !isMobile
        ? { left: "50%", transform: "translateX(-100%)" }
        : {}
      }
     >
      <RoomModal
       selectedRoom={selectedRoom}
       currentImageIndex={currentImageIndex}
       bookingData={bookingData}
       onClose={closeRoomModal}
       onNextImage={nextImage}
       onPrevImage={prevImage}
       onSetCurrentImage={setCurrentImageIndex}
       onBookingDataChange={handleBookingDataChange}
       onHandleBooking={handleConfirmBooking}
      />
     </div>

     {showPaymentGateway && (
      <PaymentGatewayModal
       onSuccess={handlePaymentSuccess}
       onCancel={handlePaymentCancel}
       roomPrice={selectedRoom.price}
       bookingDetails={{
        roomId: selectedRoom.id,
        startDate: bookingData.checkIn,
        endDate: bookingData.checkOut,
        customerEmail: bookingData.email,
       }}
      />
     )}
    </div>
   )}
   <SocialMedia />
   <div className="backdrop-blur-sm bg-white/5 border-t border-white/10 flex-shrink-0 mt-auto"></div>

   <Footer />
  </div>
 );
};

export default Rooms;