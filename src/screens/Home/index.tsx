import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {MapPin, CaretDown, BellRinging} from 'phosphor-react-native';
import Sun from '../../assets/01d.svg';
import Sun02d from '../../assets/02d.svg';

export default function Home() {
  return (
    <LinearGradient
      colors={['#292A4E', '#715C77', '#C75C2E']}
      style={style.container}
      >
        <View style={style.content}>
          <View style={style.header}>
            <View style={style.headerLeft}>
              <MapPin color='#FFF' size={25} />
              <Text style={style.headerLeftText}> Jaqueira - PE</Text>
              <CaretDown color='#FFF' size={25}/>
            </View>
            <BellRinging color='#FFF' size={25}/>
          </View>
          
          <View style={style.info}>
            <Text style={style.infoTextUser}>Bom dia! João</Text>
            <Sun width={200} height={200}/>
            <Text style={style.infoTextClima}>21°C</Text>
            <Text style={style.infoMaxMin}>Max.: 31° Min.: 25°</Text>
          </View>

      </View>

      <View style={style.footer}>
        <Text style={style.footerText}>Previsão para os proximos 7 dias.</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <View style={style.footerCard}>
              <Text style={style.footerCardDate}>Seg</Text>
              <Sun02d width={40} height={40}/>
              <Text style={style.footerCardMaxMin}>19°C</Text>
            </View>

            <View style={style.footerCard}>
          <Text style={style.footerCardDate}>Seg</Text>
          <Sun02d width={40} height={40}/>
          <Text style={style.footerCardMaxMin}>19°C</Text>
        </View>

        <View style={style.footerCard}>
          <Text style={style.footerCardDate}>Seg</Text>
          <Sun02d width={40} height={40}/>
          <Text style={style.footerCardMaxMin}>19°C</Text>
        </View>

        <View style={style.footerCard}>
          <Text style={style.footerCardDate}>Seg</Text>
          <Sun02d width={40} height={40}/>
          <Text style={style.footerCardMaxMin}>19°C</Text>
        </View>

        <View style={style.footerCard}>
          <Text style={style.footerCardDate}>Seg</Text>
          <Sun02d width={40} height={40}/>
          <Text style={style.footerCardMaxMin}>19°C</Text>
        </View>

        <View style={style.footerCard}>
          <Text style={style.footerCardDate}>Seg</Text>
          <Sun02d width={40} height={40}/>
          <Text style={style.footerCardMaxMin}>19°C</Text>
        </View>

          </ScrollView>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingTop: 40,
    paddingHorizontal: 35,
    alignItems: 'center',
  },

  header: {
    paddingHorizontal:10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  headerLeftText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600'
  },

  info: {
    paddingVertical: 60,
    alignItems: 'center',
    gap: 10,
  },

  infoTextUser: {
    fontSize: 32,
    fontWeight: '300',
    color: '#FFF',
  },

  infoTextClima: {
    fontSize: 100,
    fontWeight: '300',
    color: '#FFF',
  },

  infoMaxMin: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },

  footer: {
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },

  footerText: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: '300',
    color:'#FFF',
  },

  footerCard: {
    elevation: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'gray',
    borderRadius: 15,
    gap: 10,
    width: 99,
    height: 129,
  },

  footerCardDate: {
    fontSize: 16,
    fontWeight: '600',
  },

  footerCardMaxMin: {
    fontSize: 24,
    fontWeight: '300',
  }
})