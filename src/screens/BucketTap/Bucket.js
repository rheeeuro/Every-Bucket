import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font'
import DropDown from "./DropDown";


export default class Bucket extends Component{
    constructor(props){
        super(props);
        this.state = { isEditing: false, 
            bucketValue: props.text, 
            picture: props.picture, 
            starRate: props.starRate, 
            category: props.category 
        };
    }
    static propTypes = {
        text: PropTypes.string.isRequired,
        deleteBucket: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        updateBucket: PropTypes.func.isRequired
    }
    state = {
        isEditing: false,
        bucketValue: ""
    }

    async componentDidMount() {
        await Font.loadAsync({
          'BMHANNA': require('../../../assets/fonts/BMHANNA_11yrs_ttf.ttf')
        });
        this.setState({ fontLoaded: true });
    }


    render(){
        const { isEditing, bucketValue, picture, starRate, category } = this.state;
        const { text, id, deleteBucket } = this.props;
        return (
            this.state.fontLoaded ? (
                <View style={styles.container} key={id}>
                    <View style={styles.avatarContainer} key="1">
                        <Avatar size="large" rounded source={{uri:picture}}/>
                        <Entypo style={[styles.starRate, styles.font]} name="star" size={12}>{starRate}</Entypo>
                    </View>
                    <View style={styles.textContainer} key="2">
                        <Text style={[styles.category, styles.font]}>{category[0]} > {category[1]} > {category[2]}</Text>
                        <Text style={[styles.bucketList, styles.font]}>{text}</Text>
                    </View>
                    <View style={styles.actions}>
                            {/* <TouchableOpacity>
                                <View style={styles.bucketMenu}>
                                <Ionicons color="#2b2b2b" size={25} name="ios-more" />
                                </View>
                            </TouchableOpacity> */}
                            <DropDown/>
                    </View>
                </View>
            ): null
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth: 0.5,
        height: 120
    },
    avatarContainer:{
        flex:1,
        backgroundColor:"transparent",
        justifyContent: 'center',
        marginLeft:30
    },
    starRate:{
        marginLeft:17,
        marginTop:5

    },
    textContainer:{
        marginLeft:10,
        backgroundColor:"transparent",
        flex:3

    },
    category:{
        fontSize:15,
        marginBottom:10,
        marginTop:20
    },
    bucketList:{
        fontSize:25,
        fontWeight:"300"
    },
    bucketMenu: {
        marginRight: 30,
        marginTop: 10
    },
    font: {
        fontFamily: "BMHANNA",
        color: "#2b2b2b"
    }
})  