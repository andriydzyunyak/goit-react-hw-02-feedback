import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsItem>
        Good: <span>{good}</span>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <span>{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        Total: <span>{total()}</span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <span>{positivePercentage()}%</span>
      </StatisticsItem>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
