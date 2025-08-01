import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";
import { MdCalendarMonth, MdOutlineFeedback, MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const OverviewPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[260px] h-full bg-white p-4 flex flex-col items-center shadow-md">
        <img src={logo} alt="Logo" className="w-[140px] h-[140px] object-contain mb-6" />
        <nav className="w-full flex flex-col items-start space-y-2">
          <Link to="/over-view" className="w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-orange-100 text-orange-500 font-semibold">
            Tổng quan
          </Link>
          <Link to="/thong-ke" className="w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-orange-100 text-gray-600">
            Tổng hợp số liệu
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Tổng Quan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box: Thời gian triển khai */}
          <div className="p-6 bg-white rounded-xl shadow-md border">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center gap-2">
              <MdCalendarMonth className="text-xl text-orange-500" />
              Thời gian triển khai
            </h3>
            <Badge variant="outline">20 - 31 tháng 7 năm 2025</Badge>
          </div>

          {/* Box: Tổng số ý kiến */}
          <div className="p-6 bg-white rounded-xl shadow-md border">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center gap-2">
              <MdOutlineFeedback className="text-xl text-orange-500" />
              Tổng số ý kiến đóng góp
            </h3>
            <Badge variant="default">378 lượt</Badge>
          </div>

          {/* Box: Chi phí Khuyến mãi */}
          <div className="p-6 bg-white rounded-xl shadow-md border">
            <h3 className="text-lg font-semibold text-orange-500 mb-4 flex items-center gap-2">
              <MdOutlineAttachMoney className="text-xl text-orange-500" />
              Chi phí Khuyến mãi
            </h3>
            
            {/* Grid từng món chi phí */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg border">
                <p className="text-sm text-gray-700 font-semibold">Nước chanh dây xí muội</p>
                <p className="text-orange-500 font-bold">90 x 58.000 = 5.220.000đ</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border">
                <p className="text-sm text-gray-700 font-semibold">Bánh Pudding</p>
                <p className="text-orange-500 font-bold">215 x 38.000 = 8.170.000đ</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border">
                <p className="text-sm text-gray-700 font-semibold">Nước tía tô hạt chia</p>
                <p className="text-orange-500 font-bold">82 x 58.000 = 4.176.000đ</p>
              </div>
            </div>

            {/* Tổng cộng */}
            <div className="mt-6 text-right font-bold text-orange-500 text-lg">
              Tổng: 17.566.000đ
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
