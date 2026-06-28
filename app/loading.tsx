export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#faf9f7]">
      <div className="h-9 w-9 rounded-full border-2 border-[#b91c1c]/20 border-t-[#b91c1c] animate-spin" />
    </div>
  )
}
