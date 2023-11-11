import Image from "next/image";


export default function Pod() {
    return (
        <div className="min-h-screen w-screen scrollbar-gutter-stable bg-black   ">
            <div className="relative flex justify-center items- w-full h-[100px]">
                <Image className="w-full object-bottom h-full object-cover" src="/shades.png" height={200} width={400} alt="desktop" />
            </div>
            <div className="absolute top-0 left-0 flex pb-2 justify-center items- w-full h-[100px] backdrop-blur-sm"/>
            <div className="absolute top-0 left-0 w-full pb-2 flex flex-col justify-center items-center h-[100px]">
                <span className="text-4xl md:text-8xl font-serif text-white opacity-20">calvin&apos;s room</span>
            </div>
            <div className="p-9 mx-auto max-w-[1000px] flex flex-col gap-9 font-serif">
                
                <div className="flex flex-col gap-2">
                    <span className="text-xl leading-">I like to talk to people.</span>
                    <span className=" text-muted-foreground">Ideas can change the world. Join me in sorting through our collective consciousness and discovering what is most important.</span>
                </div>
                <div className="rounded border p-4 border-gray-600 flex flex-col gap-2">
                    <span className="text-xl ">Format</span>
                    <span className=" text-muted-foreground">No spectators, no live broadcast — just me and another human.</span>
                    <span className=" text-muted-foreground">Sometimes I travel for interviews, but I delight in hosting podcasts in my studio.</span>
                    <span className=" text-muted-foreground">Sometimes I prepare my own notes, but I do not provide a list of questions in advance.</span>
                </div>
                <div className="rounded border p-4 border-gray-600 flex flex-col gap-2">
                    <span className="text-xl ">Suggestions</span>
                    <span className=" text-muted-foreground">Know someone you think would make an interesting guest? Email c@calvin.art.</span>
                </div>
            </div>

        </div>
    )
}