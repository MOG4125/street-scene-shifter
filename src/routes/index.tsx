import { createFileRoute } from "@tanstack/react-router";
import { GhettoslopScene } from "@/components/ghettoslop-scene";
import hoodAsset from "@/assets/hood.jpeg.asset.json";
import gangSrc from "@/assets/gang-cutout.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GHETTOSLOP" },
      { name: "description", content: "GHETTOSLOP. Contact us at ghettoslop@xtinct.sbs." },
      { property: "og:title", content: "GHETTOSLOP" },
      { property: "og:description", content: "GHETTOSLOP. Contact us at ghettoslop@xtinct.sbs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <GhettoslopScene hoodSrc={hoodAsset.url} gangSrc={gangSrc} />;
}
