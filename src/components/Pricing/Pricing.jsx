import React from 'react'
import {Button} from '../../globalStyles'
import {GiCrystalBars, GiCutDiamond, GiRock} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature,
    PricingBtnLink
} from './PricingElements'

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
        <PricingSection>
            <PricingWrapper>
                <PricingHeading>
                    Our Services
                </PricingHeading>
                <PricingContainer>
                    <PricingCard>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiRock />
                            </PricingCardIcon>
                            <PricingCardPlan>Starter Pack</PricingCardPlan>
                            <PricingCardCost>$99.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>100 New Users</PricingCardFeature>
                                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                            </PricingCardFeatures>
                            <PricingBtnLink to='/sign-up'><Button  >Choose Plan</Button></PricingBtnLink>
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCrystalBars />
                            </PricingCardIcon>
                            <PricingCardPlan>Gold Rush</PricingCardPlan>
                            <PricingCardCost>$299.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>1000 New Users</PricingCardFeature>
                                <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                                <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                            </PricingCardFeatures>
                            <PricingBtnLink to='/sign-up'><Button primary>Choose Plan</Button></PricingBtnLink>
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCutDiamond />
                            </PricingCardIcon>
                            <PricingCardPlan>Diamond Kings</PricingCardPlan>
                            <PricingCardCost>$999.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                                <PricingCardFeature>24/7 Support</PricingCardFeature>
                            </PricingCardFeatures>
                            <PricingBtnLink to='/sign-up'><Button primary>Choose Plan</Button></PricingBtnLink>
                        </PricingCardInfo>
                    </PricingCard>
                </PricingContainer>
            </PricingWrapper>
        </PricingSection>
    </IconContext.Provider>
  )
}

export default Pricing