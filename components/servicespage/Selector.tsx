import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from "@/components/ui/button"
  
const CarSelector = () => {
    return (
      <div className="gap-2">
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Choose Car" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="BMW 328"> BMW 328</SelectItem>
      <SelectItem value="BMW I3">BMW I3</SelectItem>
      <SelectItem value="Audi A4">Audi A4</SelectItem>
      <SelectItem value="Tesla Model 3">Tesla Model 3</SelectItem>
      <SelectItem value="Mercedes E450">Mercedes E450</SelectItem>
    </SelectContent>
  </Select>
   <Select>
   <SelectTrigger className="w-[180px]">
     <SelectValue placeholder="Loaction" />
   </SelectTrigger>
   <SelectContent>
     <SelectItem value="Toronto">Toronto</SelectItem>
     <SelectItem value="Montreal">Montreal</SelectItem>
   </SelectContent>
 </Select>
 <Button>Click me</Button>
 </div>
    );
}
 
export default CarSelector ;