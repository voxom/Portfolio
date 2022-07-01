import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Waves from "./Waves";
import { useRouter } from "next/router";


export default function ContainerBox({ children, ...customMeta }) {
    const router = useRouter();

    const meta = {
    title: "Chad Harrington - Full-Stack Developer",
    description: `Full-stack developer with a background in art and design.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
    };
    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://voxom.netlify.app${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://voxom.netlify.app${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Chad Harrington" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <main
          className="        
            w-full
            text-gray-900
            dark:text-gray-50 
            bg-light
            dark:bg-dark
            bg-fixed
            bg-center
            bg-cover
            bg-no-repeat
            h-auto
            "
        >
          <Navbar />
          <div>{children}</div>
          <Footer />
          <Waves />
        </main>
      </div>
    );
}