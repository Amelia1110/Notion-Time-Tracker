import { ClockCircleOutlined } from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons';

export default function Icon(props) {
  if (props.iconDisplayed === "Track") {
    return <ClockCircleOutlined/>
  }
  if (props.iconDisplayed === "Overview") {
    return <CalendarOutlined/>
  }
}