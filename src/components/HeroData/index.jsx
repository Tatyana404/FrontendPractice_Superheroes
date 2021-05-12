import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as HeroActionCreators from '../../actions/heroCreators';

const HeroData = props => {
  const { heroes, isFetching, error, getHeroesRequest } = props;
  const [hidden, setHidden] = useState(true);
  const loadMore = () => getHeroesRequest({ offset: heroes.length });

  const visibility = () => {
    setHidden(hidden => !hidden);
  };

  useEffect(() => {
    getHeroesRequest();
  }, []);

  return (
    <section>
      <button onClick={visibility}>Full info</button>
      <button onClick={loadMore}>Load more Heroes!</button>
      <h1>HeroList</h1>
      {isFetching && 'LOADING...'}
      {error && error.name}
      <article>
        {heroes.map((hero, index) => (
          <div key={index}>
            <>
              <div>{hero.images}</div>
              <div>{hero.nickName}</div>
            </>
            <div hidden={hidden}>
              <div>{hero.id}</div>
              <div>{hero.realName}</div>
              <div>{hero.originDescription}</div>
              <div>{hero.catchPhrase}</div>
              <div>{hero.superpowers}</div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

const mapStateToProps = ({ hero }) => hero;
const mapDispatchToProps = dispatch => ({
  getHeroesRequest: ({ limit, offset } = {}) =>
    dispatch(HeroActionCreators.getHeroRequest({ offset, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroData);
