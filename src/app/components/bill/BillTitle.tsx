type TitleInfoProps = {
  title: string
}
export default function BillTitle({ title }: TitleInfoProps) {
  
  return (
    <h1 className="text-3xl font-bold whitespace-pre-line text-black">{title}</h1>
  )
}