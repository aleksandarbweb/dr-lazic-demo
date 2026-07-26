export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="h-9 w-9 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    </div>
  )
}
