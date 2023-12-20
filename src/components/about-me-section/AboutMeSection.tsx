import Image from "next/image"

export const AboutMeSection = () => {
    return (
        <section className="flex flex-col gap-10 px-5 py-14" id={"about-me"}>
            <article>
                <div>
                    <Image src="https://picsum.photos/200" alt="Fernando Gorordo Photo" width={100} height={100} />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl text-headings">La <span className="text-primary font-bold">persona</span> detrás del código.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed delectus architecto quasi inventore doloribus amet pariatur soluta, perferendis in eius tempora et natus nisi esse, reiciendis assumenda quisquam ad accusamus enim quae voluptas deserunt reprehenderit porro! Ad eaque quod sapiente! Cupiditate, blanditiis ipsa necessitatibus provident ullam eos dolores impedit quae ratione error eveniet ipsam, iste nam, vero corporis aut itaque porro facilis fugiat eius magni! Veniam minus, magnam quas, rem fugiat reprehenderit ab quidem aliquid numquam cum eaque culpa necessitatibus maiores asperiores dicta labore repellat deleniti libero id fuga qui magni laboriosam voluptatem! Eum asperiores minus cumque eaque iusto atque!</p>
                </div>
            </article>
            <article>
                <div className="grid grid-cols-1 gap-6">
                    <h2 className="text-4xl text-headings">Certificaciones</h2>
                    <div className="flex justify-center items-center bg-background-alt rounded-2xl h-[330px]">
                        <p className="text-3xl">Work in progress</p>
                    </div>
                </div>
            </article>
        </section>
    );
};
