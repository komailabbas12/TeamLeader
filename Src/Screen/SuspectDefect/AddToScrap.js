import { Button, Select } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
    heightPercentageToDP, heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppStyles } from '../../AppStyle/AppStyle';
import Header from '../../Component/Header';
import OtrixDivider from '../../Component/OtrixDivider';


export default function AddToScrap(props) {
    const [type, settype] = React.useState('');

    return (
        <View style={{
            flex: 1,
            backgroundColor: AppStyles.color.primaryColor
        }} >
            <Header
                title='Add Defect'
                navigation={props?.navigation}

            />
            <OtrixDivider size={'md'} />
            <View style={{ alignItems: "center" }}>
                <Select
                    dropdownIcon={
                        <MaterialIcons
                            name="unfold-more"
                            size={wp('5%')}
                            color={'rgba(44, 48, 56, 0.5)'}

                        />
                    }
                    width={wp('90%')}
                    style={{
                        fontSize: hp('1.6%'),
                        fontFamily: 'Poppins-Regular',
                        color: 'rgba(44, 48, 56, 0.8)',
                    }}
                    placeholder="Select the Product type"
                    selectedValue={type}
                    onValueChange={itemValue => {
                        settype(itemValue);

                    }}>
                    <Select.Item label="PIECE 1" value="key0" />
                    <Select.Item label="PIECE 2" value="key1" />
                    <Select.Item label="PIECE 3" value="key2" />
                </Select>
            </View>
            <View style={{
                flex:1,
                marginHorizontal:"5%"
            }}>
                <OtrixDivider size={'md'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.normal,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textColor,

                }}>Defect ID: qwde</Text>
                <OtrixDivider size={'sm'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.normal,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textColor,

                }}>Defect Description: abc abc abc abc</Text>
                <OtrixDivider size={'md'} />
                <Image
                    resizeMode="stretch"
                    source={{ uri: 'https://media.istockphoto.com/id/478335060/photo/tqm-zero-defect.jpg?s=612x612&w=0&k=20&c=aXrBWU0_V4ianfe5smk9SoL-BMSjMSGibAmyZjO-rbE=' }}
                    style={{
                        width: "100%",
                        height: heightPercentageToDP('50%')
                    }}
                />
            </View>
            <Button
                size="md"
                variant="solid"
                bg={'#000'}
                style={[styles.button]}
                onPress={() => {
                    props.navigation.navigate('suspectDefectHome');
                }}>
                <Text style={[styles.buttonText]}>ADD</Text>
            </Button>
            <OtrixDivider size={'lg'} />

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