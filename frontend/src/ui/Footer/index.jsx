export default function Footer() {

    return(
    <>
        <section className="bg-FooterGradiant text-white font-openSans">
    <div className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:justify-around">

            <div className="text-center mb-10 lg:text-start">
                <h2 className="text-3xl font-bold mb-5">
                    Profitez de n'importe où !
                </h2>
                <p className="">
                    Actuellement disponible sur le Web, iOS, Android, Android TV et Fire TV.
                </p>
            </div>

            <img src="/img/image_footer.webp" alt="" className="w-full max-w-96 xl:max-w-140"/>

    </div>

<p className="text-center py-10">
    Copyright © 2024 — Filmtastic by Tom BOUTIN
</p>

        </section>
    </>
    )
}