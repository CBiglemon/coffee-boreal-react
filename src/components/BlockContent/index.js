import './style.scss';

export default function BlockLeft() {
  return (
    <div className="left__block">
      <section className="left__block__img" />
      <section className="left__block__block">
        <span className="left__block__block__sub">L'histoire de nos</span>
        <a className="left__block__block__title">Coffee Shops</a>
        <div className="left__block__block__separator" />
        <p className="left__block__block__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit hic quis maxime officia, eos fuga rerum minus totam, reiciendis velit odit accusantium maiores ducimus eligendi consequuntur delectus soluta accusamus.
          Quisquam odio vero saepe commodi vitae illo eligendi voluptas ex earum omnis repellat nam mollitia, iure numquam a libero, fuga ipsam magni esse facilis adipisci ducimus architecto! Voluptas, consectetur consequatur?
        </p>
      </section>
    </div>
  );
}
