import { getSession } from "next-auth/react";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <div className="container p-6 space-y-5">
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          alias, in placeat, itaque laudantium quas rerum tempore consequatur
          aperiam ab nisi beatae quam eos voluptates cumque. Vero neque ullam
          commodi!
        </p>

        <p>
          Inventore corrupti, qui blanditiis enim? Officia molestiae minus
          veritatis soluta libero ullam ipsa atque ea beatae consequatur
          deleniti quisquam, voluptatem reprehenderit! Vel, mollitia et? Saepe
          quod neque, placeat vel quibusdam recusandae eaque, officiis adipisci
          perspiciatis sit tenetur distinctio aliquam quasi excepturi ratione
          amet pariatur consequuntur eius repellat tempora quam fugiat odio?
          Quibusdam animi optio voluptate dolor repudiandae ex natus
          voluptatibus earum quo, dicta eaque alias quaerat, nisi blanditiis
          architecto quis ducimus accusamus praesentium accusantium. Blanditiis,
          sit! Ratione officia maiores soluta odit aspernatur accusantium ipsam
          quas neque quod adipisci itaque laudantium, sequi labore, dolore
          corrupti. Molestiae tempore fuga dolorem adipisci eligendi ipsam animi
          perferendis ut. Ad, unde officiis expedita quis, obcaecati, explicabo
          quaerat quibusdam aliquid architecto eaque at numquam quas officia
          cumque accusamus fugit voluptates maxime sit vero repudiandae
          laboriosam. Exercitationem, repellendus nemo. Magnam maxime
          consequuntur, quasi voluptate consequatur recusandae. Non explicabo,
          obcaecati, labore recusandae ut, vitae nesciunt impedit vero dicta
          fugit itaque voluptatibus repellat inventore doloremque. Excepturi
          veritatis quaerat laudantium facilis, perspiciatis quidem? Aut illum
          fugiat repellat dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          impedit eum laboriosam culpa quod ex architecto iusto natus quisquam
          aliquam, cumque expedita animi inventore itaque quibusdam quidem
          voluptates dicta. Sed!
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

export async function getServerSideProps({ req }: { req: any }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
