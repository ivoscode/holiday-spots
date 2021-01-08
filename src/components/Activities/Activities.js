import Activity from './Activity';
import SlickSlider from '../SlickSlider';

const Activities = (props) => {
  const activities =
    props.activities &&
    props.activities.map((activity, i) => {
      return (
        <div key={i} className='col s2'>
          <Activity activity={activity} />
        </div>
      );
    });
  return (
    <div className='max-w-5xl mt-20 mx-auto px-4 lg:px-0'>
      <h1 className='main-header-text'>{props.header}</h1>
      <SlickSlider elements={activities} settingsActivities={true} />
    </div>
  );
};

export default Activities;
