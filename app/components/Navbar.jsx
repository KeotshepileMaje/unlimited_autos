import Link from "next/link";
import Container from "./Container";

const NavBar = () => {
    return (
      <div
        className="
        sticky 
        top-0
        w-full
        bg-gradient-to-r
        from-slate-400 to-slate-200
        m-0
        p-0
        z-30
        shadow-sm
        mb-0
        "
      >
        <div className="py-4 border-b-[1px]">
          <Container>
            <div
              className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    "
            >
              <Link href="/" className={` font-bold text-2xl`}>
                Unlimited Autos
              </Link>
              <div className="hidden md:block">Search</div>
              <div
                className=" 
                        flex 
                        items-center 
                        gap-8 
                        md-gap-12
                        "
              >
                <div>Okay</div>
                <div>Okay</div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
}

export default NavBar;