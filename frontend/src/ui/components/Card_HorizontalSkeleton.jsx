import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Card_HorizontalSkeleton() {

  return (
    <li id={id} className="list-none group relative h-52 w-88 cursor-pointer z-3">
      
      <Skeleton className="h-full object-cover" height="100%" />
    </li>
  )

}

