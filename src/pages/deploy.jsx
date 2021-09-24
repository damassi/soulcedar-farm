import { Center } from "../components/Center";
import Head from "next/head";

export default function Deploy() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Center>
        <form
          target="_blank"
          action="https://api.netlify.com/build_hooks/614ad256da0f94653daaeef5"
          method="post"
        >
          <input type="submit" name="deploy" value="Deploy Site" />
        </form>
      </Center>
    </>
  );
}
