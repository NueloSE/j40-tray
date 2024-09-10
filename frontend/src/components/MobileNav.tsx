import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react"

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-yellow-600" />
			</SheetTrigger>
			<SheetContent className="space-y-8">
				<SheetTitle>
					<span>Welcom to J40-TRAY!</span>
				</SheetTitle>

				<Separator />

				<SheetDescription className="flex">
					<Button className="flex-1 font-bold bg-yellow-500">Log In</Button>
				</SheetDescription>
				
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav;
