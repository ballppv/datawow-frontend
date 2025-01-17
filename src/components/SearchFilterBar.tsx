import ButtonBorder from '@/components/button/ButtonBorder'
import tw from '@/utilities/tw'

const classes = {
  container: tw(`w-full max-w-[798px] flex items-center justify-between`),
  filterAndCreateBtn: tw(``),
  createBtn: tw(
    `ibm-font w-[105px] h-10 px-4 py-[10px] flex items-center justify-center
    bg-success border border-success rounded-lg text-white`,
  ),
}

const SearchFilterBar = () => {
  return (
    <div className={classes.container}>
      <div>sss</div>
      <ButtonBorder className={classes.createBtn} onClick={() => {}}>
        <div>Create +</div>
      </ButtonBorder>
    </div>
  )
}

export default SearchFilterBar
