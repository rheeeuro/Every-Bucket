import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons";
import PropTypes from "prop-types";


export default class Bucket extends Component{
    constructor(props){
        super(props);
        this.state = { isEditing: false, bucketValue: props.text, picture: props.picture, starRate: props.starRate, category: props.category };
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
    render(){
        const { isEditing, bucketValue, picture, starRate, category } = this.state;
        const { text, id, deleteBucket } = this.props;
        return (
            <View style={styles.container} key={id}>
                <View style={styles.avatarContainer} key="1">
                    <Avatar size="large" rounded source={{uri:picture}}/>
                    <Entypo style={styles.starRate} name="star" size={12}>{starRate}</Entypo>
                </View>
                <View style={styles.textContainer} key="2">
                    <Text style={styles.category}>{category[0]} > {category[1]} > {category[2]}</Text>
                    <Text style={styles.bucketList}>{text}</Text>



                    {isEditing?(
                    <TextInput
                    style = {[
                        styles.text,
                        styles.input
                    ]}
                    value = {toDoValue}
                    multiline = {true}
                    onChangeText = {this._controlInput}
                    returnKeyType = {"done"}
                    onBlur = {this._finishEditing}
                     />
                    ) : (
                    <Text style={styles.text}>{text}</Text>
                    )}
                </View>
                    {isEditing? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={this._finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={this._startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✏</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut = {(event) => {
                                event.stopPropagation();
                                deleteBucket(id);
                                } }>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}




            </View>
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
        marginBottom:20,
        marginTop:10
    },
    bucketList:{
        fontSize:25,
        fontWeight:"300"
    }
  
})  