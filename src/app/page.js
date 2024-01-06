import Image from 'next/image';
import { groq } from 'next-sanity';
import { getImageDimensions } from '@sanity/asset-utils';
import Layout from '@/components/Layout';
import { client, urlForImage } from '@/utils/sanityClient';

export default async function Home() {
  const posts = await client.fetch(groq`
  *[_type == 'siteSettings']{
    'image': image.asset,
    'alt': image.alt
  }[0]`);
  // console.log(urlForImage(posts.image).width(24).height(24).blur(10).url());

  return (
    <Layout>
      <main>
        <div className="wrapper">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto
            reiciendis modi enim laudantium aliquam, dolore excepturi
            repudiandae tempore, atque quos expedita iste. Labore quas
            perspiciatis quidem repellendus quae animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ad
            magnam expedita quis cum quo est ipsum tempore suscipit esse atque,
            perspiciatis laborum reiciendis mollitia placeat accusantium
            consequuntur odit ea iusto voluptatem facilis sunt, quae eos
            provident! Aliquid temporibus sequi, quidem ipsum, nostrum animi
            debitis tenetur quisquam natus id error corrupti iure aspernatur
            asperiores nulla a eos odio nihil porro. Hic ratione ex, expedita
            soluta non eius necessitatibus modi. Dicta, aspernatur ex, fugiat
            quibusdam voluptates quae reiciendis hic laudantium mollitia,
            explicabo accusamus consectetur distinctio inventore nam nostrum eos
            et pariatur aliquam. Pariatur iure non cumque velit sequi, magni
            tempore hic eligendi at quidem corporis mollitia necessitatibus
            doloremque nihil nobis provident, commodi distinctio eveniet
            dolorum? Aperiam placeat eligendi aliquid velit voluptatum, vero,
            deleniti est mollitia illo corrupti molestias tenetur ullam? Odio
            quas voluptatum eveniet quisquam dignissimos, sunt laborum eum
            minima ab, consequatur doloremque! Corrupti vel numquam quasi, qui
            voluptas libero, voluptatibus quae aut neque quia placeat, optio
            asperiores. Adipisci at error voluptas harum, delectus non maiores
            debitis dicta. Illo, maiores mollitia explicabo sapiente corporis id
            magni accusantium sunt exercitationem libero distinctio fugit
            aperiam fugiat sint hic rerum enim est, velit nostrum? Error
            expedita qui sint aspernatur tempora rem, natus voluptates impedit!
          </p>
          <h2>Ayyo</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta a
            ratione perferendis error praesentium dolor velit nemo, odio
            debitis! Veritatis magni dolore iusto architecto. Ullam quo
            aspernatur natus vitae velit earum placeat asperiores quasi modi
            quis quod dolore ad a hic magni, debitis, corrupti assumenda
            accusamus voluptas et non saepe. Cumque voluptas expedita ea
            exercitationem a doloremque beatae similique, nesciunt minima magnam
            dolores molestias in aliquam deserunt incidunt, natus quas unde ab
            distinctio hic excepturi ipsum quisquam tempora? In blanditiis harum
            accusamus illo beatae assumenda neque aperiam illum dicta? Sit
            doloremque nulla quae voluptatibus quo magni dolorum ipsum est
            dolore.
          </p>

          <div className="img-contain">
            <Image
              src={urlForImage(posts.image).url()}
              alt="Image"
              width={getImageDimensions(posts.image).width}
              height={getImageDimensions(posts.image).height}
              quality={96}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={urlForImage(posts.image)
                .width(24)
                .height(24)
                .blur(10)
                .url()}
              // sizes="
              // (max-width: 768px) 100vw,
              // (max-width: 1920px) 50vw,
              // 40vw"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
