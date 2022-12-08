import { PolygonWithMenu } from "../organisms";

export default function PolygonTemplate({ elements }) {
  return elements.map((element) => (
    <PolygonWithMenu key={element.id} {...element} />
  ));
}
