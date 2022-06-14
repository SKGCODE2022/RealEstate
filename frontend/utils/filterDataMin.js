import { Button } from "@chakra-ui/react";

export const filterDataMin = [
    {
      items: [
        { name: 'Thessaloniki', value: 'thessaloniki' },
        { name: 'Athens', value: 'athens' },
        { name: 'Heraklion', value: 'heraklion' },
      ],
      placeholder: 'Location',
      queryName: 'locationExternalIDs',
    },
    {
      items: [
        { name: 'Buy', value: 'for-sale' },
        { name: 'Rent', value: 'for-rent' },
      ],
      placeholder: 'Purpose',
      queryName: 'purpose',
    },
    {
      items: [
        { name: '200', value: '200' },
        { name: '350', value: '350' },
        { name: '500', value: '500' },
        { name: '800', value: '800' },
        { name: '1000', value: '1000' },

      ],
      placeholder: 'Min Price(€)',
      queryName: 'minPrice',
    },
    {
      items: [

        { name: '350', value: '350' },
        { name: '500', value: '500' },
        { name: '800', value: '800' },
        { name: '1000', value: '1000' },
        { name: '2000', value: '2000' },
      ],
      placeholder: 'Max Price(€)',
      queryName: 'maxPrice',
    },
    {
      items: [
        { name: '40', value: '40' },
        { name: '60', value: '60' },
        { name: '80', value: '80' },
        { name: '100', value: '100' },
        { name: '120', value: '120' },
        { name: '200', value: '200' },
      ],
      placeholder: 'Max Area(m²)',
      queryName: 'areaMax',
    },
    {
      items: [
        { name: 'Lowest Price', value: 'price-asc' },
        { name: 'Highest Price', value: 'price-des' },
        { name: 'Newest', value: 'date-asc' },
        { name: 'Oldest', value: 'date-desc' },
        // { name: 'Verified', value: 'verified-score' },
        // { name: 'City Level Score', value: 'city-level-score' },
      ],
      placeholder: 'Sort',
      queryName: 'sort',
    }
  ];
  
  export const getFilterValues = (filterValues) => {
    const {
      purpose,
      minPrice,
      maxPrice,
      areaMax,
      sort,
      locationExternalIDs,
    } = filterValues;
  
    const values = [
      {
        name: 'purpose',
        value: purpose,
      },
      {
        name: 'minPrice',
        value: minPrice,
      },
      {
        name: 'maxPrice',
        value: maxPrice,
      },
      {
        name: 'areaMax',
        value: areaMax,
      },
      {
        name: 'sort',
        value: sort,
      },
      {
        name: 'locationExternalIDs',
        value: locationExternalIDs,
      }
    ];
  
    return values;
  };
  