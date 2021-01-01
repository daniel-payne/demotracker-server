const overlays = (parent, args, context, info) => {
  return [
    {
      id: 'DATA',
      name: 'Data',
      options: [
        { id: 'NONE', title: 'None' },
        {
          id: 'WTR',
          title: 'Wikipedia Terrorism Reports',
          ranges: [
            { id: '1970', title: '(1970 - Today)' },
            { id: '2000', title: '(2000 - Today)' },
            { id: '2015', title: '(2015 - Today)' },
            { id: '2018', title: '(2018 - Today)' },
            { id: '2020', title: '(2020 - Today)' },
            { id: 'YTD', title: 'This Year (2021)' },
            { id: 'MTD', title: 'This Month (January)' },
            { id: 'LTD', title: 'Last Three Days (Since 2 Jan)' },
          ],
        },
        {
          id: 'GTD',
          title: 'Global Terrorism Database',
          ranges: [
            { id: '1970', title: '(1970 - 2018)' },
            { id: '2000', title: '(2000 - 2018)' },
            { id: '2015', title: '(2015 - 2018)' },
            { id: '2018', title: '(2018)' },
          ],
        },
        {
          id: 'VME',
          title: 'Voyage Manager Events',
          ranges: [
            { id: '2020', title: '(2020 - Today)' },
            { id: 'YTD', title: 'This Year (2021)' },
            { id: 'MTD', title: 'This Month (January)' },
            { id: 'LTD', title: 'Last Three Days (Since 2 Jan)' },
          ],
        },
      ],
    },
    {
      id: 'PEOP',
      name: 'People',
      options: [
        { id: 'NONE', title: 'None' },
        { id: 'CUP', title: 'Current Positions' },
        { id: 'CFP', title: 'Current & Future Positions' },
      ],
    },
    {
      id: 'DISP',
      name: 'Display',
      options: [
        { id: 'ALL', title: 'All Regions' },
        { id: 'RCD', title: 'Regions Containing Data' },
      ],
    },
  ]
}

export default overlays
