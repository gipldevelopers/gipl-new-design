"use client";

export default function Header({ title, subtitle }) {
  return (
    <div className="bg-white border-b border-[#E2E8F0] px-[40px] py-[24px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-[700] text-[#0F172A]">{title}</h1>
          {subtitle && (
            <p className="text-[14px] text-[#64748B] mt-[4px]">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] bg-[#2F2C8F] rounded-full flex items-center justify-center">
            <span className="text-white text-[14px] font-[600]">A</span>
          </div>
          <div>
            <div className="text-[14px] font-[600] text-[#0F172A]">Admin</div>
            <div className="text-[12px] text-[#64748B]">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}
