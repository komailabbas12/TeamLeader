import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Header from '../../Component/Header';
import OtrixDivider from '../../Component/OtrixDivider';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from 'native-base';
import { AppStyles } from '../../AppStyle/AppStyle';

const data = [
    {
        defectid: "Suspect",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:true
    },
    {
        defectid: "Suspect",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:true
    },
    {
        defectid: "Suspect",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:true
    },
    {
        defectid: "Suspect",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:true
    },
]
const block = [
    {
        defectid: "Defect 3",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:false
    },
    {
        defectid: "Defect 4",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:false
    },
    {
        defectid: "Defect 5",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:false
    },
    {
        defectid: "Defect 6",
        worderid: "ABC",
        productid: "df23",
        date: '12/12/2022',
        suspect:false
    },
]
export default function suspectDefectHome(props) {
    const [suspectDefect, setsuspectDefect] = useState(props?.route?.params?.suspect)
    
    const renderitem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => props?.navigation.navigate('SuspectBlockDetail', {
                        item: item
                    })}
                    style={{
                        padding: "4%",
                        backgroundColor: AppStyles.color.primaryColor,
                        borderRadius: 5,
                        elevation: 5,
                        marginHorizontal: '4%'
                    }}>
                    <Text style={{
                        fontSize: AppStyles.fontSize.normal,
                        fontFamily: AppStyles.fontName.bold,
                        color: AppStyles.color.textColor,

                    }}>Defect ID: {item?.defectid}</Text>
                    <OtrixDivider size={'sm'} />
                    <Text style={{
                        fontSize: AppStyles.fontSize.small,
                        fontFamily: AppStyles.fontName.bold,
                        color: AppStyles.color.textseconday,

                    }}>Worker ID: {item?.worderid}</Text>
                    <OtrixDivider size={'sm'} />
                    <Text style={{
                        fontSize: AppStyles.fontSize.small,
                        fontFamily: AppStyles.fontName.bold,
                        color: AppStyles.color.textseconday,

                    }}>Product ID: {item?.productid}</Text>
                    <OtrixDivider size={'sm'} />
                    <Text style={{
                        fontSize: AppStyles.fontSize.small,
                        fontFamily: AppStyles.fontName.bold,
                        color: AppStyles.color.textseconday,

                    }}>Date: {item?.date}</Text>

                </TouchableOpacity>
                <OtrixDivider size={'md'} />

            </View>
        )
    }
    return (
        <View style={{
            flex: 1, backgroundColor: '#fff',
        }} >
            <Header
                title='Suspect Defect'
                navigation={props?.navigation}

            />
            <View style={{
                flexDirection: "row"
            }}>
                <Button
                    size="md"
                    variant="solid"
                    bg={'#000'}
                    style={{ flex: 1, borderRadius: 0, borderBottomWidth: 4, borderColor: suspectDefect ? '#14548C' : 'black' }}
                    onPress={() => {
                        setsuspectDefect(true)
                    }}
                >

                    <Text style={[styles.buttonText]}>Suspect Defect</Text>

                </Button>
                <Button
                    size="md"
                    variant="solid"
                    bg={'#000'}
                    style={{ flex: 1, borderRadius: 0, borderBottomWidth: 4, borderColor: !suspectDefect ? '#14548C' : 'black' }}
                    onPress={() => {
                        setsuspectDefect(false)
                    }}
                >

                    <Text style={[styles.buttonText]}>Blocked</Text>

                </Button>

            </View>
            <View style={{
                flex: 1,
                backgroundColor: AppStyles.color.primaryColor
            }}>
                <OtrixDivider size={'md'} />
                {suspectDefect ? (
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index}
                        renderItem={renderitem}
                    />
                ) : <FlatList
                    data={block}
                    keyExtractor={(item, index) => index}
                    renderItem={renderitem}
                />}


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: wp('3.5%'),
    },
    button: {
        height: wp('11%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
        marginHorizontal: wp('5%'),
    },
});