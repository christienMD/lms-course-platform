"use client";

import {
  FcBriefcase,
 FcEngineering,
 FcFilmReel,
 FcMultipleDevices,
 FcMusic,
 FcOldTimeCamera,
 FcSalesPerformance,
 FcSportsMode
} from 'react-icons/fc'
import { IconType } from 'react-icons/lib';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Category } from "@prisma/client";
import CategoryItem from './CategoryItem';

interface Props {
  items: Category[];
}

const iconMap: Record<Category['name'] , IconType> = {
    'Music': FcMusic,
    'Photography': FcOldTimeCamera,
    'Fitness': FcSportsMode,
    'Accounting': FcSalesPerformance,
    'Computer Science': FcMultipleDevices,
    'Filming': FcFilmReel,
    'Engineering': FcEngineering,
    'Business': FcBriefcase
}

const Categories = ({ items }: Props) => {


  return (
    <ScrollArea className="w-full">
      <div className="flex items-center gap-x-2 pb-4">
        {items.map(item => (
          <CategoryItem 
            key={item.id}
            label={item.name}
            icon={iconMap[item.name]}
            value={item.id}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Categories;