import { LaptopChromebook, Telegram, Storefront, BookOnline, WarningAmberRounded, SportsEsportsRounded } from '@mui/icons-material'
import "./styles/Staking.scss"

const LIST = [
    {
        icon: <LaptopChromebook className='muiIcon'/>,
        text: 'Mushee staking',
        subText: 'Easily stake mushee for gains and more'
    },
    {
        icon: <Telegram className='muiIcon'/>,
        text: 'Reward pool',
        subText: 'Interest earned on reward pools are distributed among the participants of the pool.'
    },
    {
        icon: <Storefront className='muiIcon'/>,
        text: 'Automate farming',
        subText: 'Smart contracts and automated tools to perform yield farming and liquidity mining on behalf of users.'
    },
    {
        icon: <BookOnline className='muiIcon'/>,
        text: 'Governance features',
        subText: 'Users of mushee, participate in the decision-making processes that govern the network'
    },
    {
        icon: <WarningAmberRounded className='muiIcon'/>,
        text: 'Achievement & NFT',
        subText: 'Offer your clients an alternative to fiat payments'
    },
    {
        icon: <SportsEsportsRounded className='muiIcon'/>,
        text: 'User Profile',
        subText: 'Information to describe users on a mushee.'
    },
]

const Staking = () => {
  return (
    <div className='Staking'>
        <h1>Mushee - Staking</h1>
        <div className='StakingList'>
            {
                LIST.map(list => {
                    return(
                        <div className='List' key={list.text}>
                            {list.icon}
                            <div>
                                <h2>{list.text}</h2>
                                <p>{list.subText}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Staking