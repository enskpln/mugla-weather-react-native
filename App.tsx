/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
  Animated,
  SafeAreaView,
  FlatList,
} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {firebaseApp} from './src/firebase/config';
import firestore from '@react-native-firebase/firestore';
import _01Svg from './assets/svg_icons/01d.svg';
import _02Svg from './assets/svg_icons/02d.svg';
import _03Svg from './assets/svg_icons/03d.svg';
import _04Svg from './assets/svg_icons/04d.svg';
import _09Svg from './assets/svg_icons/09d.svg';
import _10Svg from './assets/svg_icons/10d.svg';
import _11Svg from './assets/svg_icons/11d.svg';
import _01NightSvg from './assets/svg_icons/01n.svg';
import _02NightSvg from './assets/svg_icons/02n.svg';
import _03NightSvg from './assets/svg_icons/03n.svg';
import _04NightSvg from './assets/svg_icons/04n.svg';
import _09NightSvg from './assets/svg_icons/09n.svg';
import _10NightSvg from './assets/svg_icons/10n.svg';
import _11NightSvg from './assets/svg_icons/11n.svg';
import images from './images';
import LinearGradient from 'react-native-linear-gradient';
import Tooltip from 'rn-tooltip';
import Loader from './Loader';
import SplashScreen from 'react-native-splash-screen';
// import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;

  const getWeather = async () => {
    firestore()
      .collection('weather')
      .doc('allweather')
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          setWeather(data.weathers);
          setIsLoading(false);
          console.log('data yüklendi.');
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getWeather();
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }, []);

  const renderItem = ({item}) => (
    <Item
      day={item.day}
      temp={item.temp}
      img={item.img}
      max={item.maxmin[0]}
      min={item.maxmin[1]}
      humidity={item.humidity[0]}
      rain={item.rain[0]}
      wind={item.wind[0]}
    />
  );

  const Item = ({day, temp, img, max, min, humidity, rain, wind}) => (
    <View style={styles.item}>
      <View style={{width: windowWidth / 3 - 38}}>
        <Text style={styles.title}>{day}</Text>
      </View>
      <View
        style={{
          width: windowWidth / 3 - 38,
          alignItems: 'center',
          paddingLeft: 28,
        }}>
        {img.includes('01') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '01d.svg' ? (
              <_01Svg height={32} width={32} />
            ) : (
              <_01NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : img.includes('02') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '02d.svg' ? (
              <_02Svg height={32} width={32} />
            ) : (
              <_02NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : img.includes('03') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '03d.svg' ? (
              <_03Svg height={32} width={32} />
            ) : (
              <_03NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : img.includes('04') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '04d.svg' ? (
              <_04Svg height={32} width={32} />
            ) : (
              <_04NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : img.includes('09') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '09d.svg' ? (
              <_09Svg height={32} width={32} />
            ) : (
              <_09NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : img.includes('10') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '10d.svg' ? (
              <_10Svg height={32} width={32} />
            ) : (
              <_10NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : img.includes('11') ? (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            {img === '11d.svg' ? (
              <_11Svg height={32} width={32} />
            ) : (
              <_11NightSvg height={32} width={32} />
            )}
          </Tooltip>
        ) : (
          <Tooltip
            backgroundColor="#1974D2"
            height={120}
            popover={
              <View>
                <Text style={{color: 'white'}}>En yüksek: {max} °C</Text>
                <Text style={{color: 'white'}}>En düşük: {min} °C</Text>
                <Text style={{color: 'white'}}>Nem: %{humidity}</Text>
                <Text style={{color: 'white'}}>Yağış İhtimali: %{rain}</Text>
                <Text style={{color: 'white'}}>Rüzgar: {wind} km/s</Text>
              </View>
            }>
            <_01Svg height={32} width={32} />
          </Tooltip>
        )}
      </View>
      <View
        style={{
          width: windowWidth / 3 - 38,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text style={styles.title}>{temp} °C</Text>
      </View>
    </View>
  );

  return (
    <>
      {!isLoading ? (
        <>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={1}>
            {weather.map((location, index) => {
              return (
                <View
                  style={{width: windowWidth, height: windowHeight}}
                  key={index}>
                  <SafeAreaView style={{flex: 1, backgroundColor: '#f7f7f7'}}>
                    <View
                      style={{width: windowWidth, height: windowHeight / 2.3}}>
                      <Image
                        style={{flex: 1, width: undefined, height: undefined}}
                        source={images[location.city]}
                        resizeMode="cover"
                      />
                      <LinearGradient
                        colors={['transparent', '#eaeaea', '#f7f7f7']}
                        style={{
                          position: 'absolute',
                          width: windowWidth,
                          height: 60,
                          bottom: 0,
                          left: 0,
                          right: 0,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: windowWidth - 80,
                        height: 160,
                        backgroundColor: '#fff',
                        marginTop: -80,
                        marginLeft: 40,
                        borderRadius: 10,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                      }}>
                      <Text
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 10,
                          fontFamily: 'Livvic-Regular',
                          fontSize: 28,
                          color: 'black',
                        }}>
                        {location.city}
                      </Text>
                      <View
                        style={{
                          height: 2,
                          width: windowWidth - 80,
                          backgroundColor: '#f3f3f3',
                          marginVertical: 5,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 8,
                        }}>
                        <View
                          style={{
                            marginTop: -4,
                          }}>
                          {location.img.includes('01') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '01d.svg' ? (
                                <_01Svg height={72} width={72} />
                              ) : (
                                <_01NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : location.img.includes('02') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '02d.svg' ? (
                                <_02Svg height={72} width={72} />
                              ) : (
                                <_02NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : location.img.includes('03') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '03d.svg' ? (
                                <_03Svg height={72} width={72} />
                              ) : (
                                <_03NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : location.img.includes('04') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '04d.svg' ? (
                                <_04Svg height={72} width={72} />
                              ) : (
                                <_04NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : location.img.includes('09') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '09d.svg' ? (
                                <_09Svg height={72} width={72} />
                              ) : (
                                <_09NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : location.img.includes('10') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '10d.svg' ? (
                                <_10Svg height={72} width={72} />
                              ) : (
                                <_10NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : location.img.includes('11') ? (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              {location.img === '11d.svg' ? (
                                <_11Svg height={72} width={72} />
                              ) : (
                                <_11NightSvg height={72} width={72} />
                              )}
                            </Tooltip>
                          ) : (
                            <Tooltip
                              backgroundColor="#1974D2"
                              height={120}
                              popover={
                                <View>
                                  <Text style={{color: 'white'}}>
                                    En yüksek: {location.maxmin[0]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    En düşük: {location.maxmin[1]} °C
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Nem: %{location.humidity}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Yağış İhtimali: %{location.rain}
                                  </Text>
                                  <Text style={{color: 'white'}}>
                                    Rüzgar: {location.wind} km/s
                                  </Text>
                                </View>
                              }>
                              <_01Svg height={72} width={72} />
                            </Tooltip>
                          )}
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: 8}}>
                          <Text
                            style={{
                              marginTop: 12,
                              fontFamily: 'Livvic-Regular',
                              fontSize: 15,
                              color: 'black',
                            }}>
                            {location.weatherType}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Livvic-Regular',
                              fontSize: 15,
                              color: 'black',
                            }}>
                            {location.temparature} °C
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flex: 1, marginTop: 20, paddingBottom: 60}}>
                      <FlatList
                        data={location.weekly}
                        renderItem={renderItem}
                        keyExtractor={item => item.day}
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                    {/* <View
                      style={{
                        position: 'absolute',
                        bottom: 30,
                        alignSelf: 'center',
                      }}>
                      <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.BANNER}
                        requestOptions={{
                          requestNonPersonalizedAdsOnly: true,
                        }}
                      />
                    </View> */}
                  </SafeAreaView>
                </View>
              );
            })}
          </ScrollView>
        </>
      ) : (
        <Loader />
      )}

      <View style={styles.indicatorWrapper}>
        {weather.map((location, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.normalDot, {width}]} />
          );
        })}
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 38,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Livvic-Regular',
    color: 'gray',
  },
  city: {
    color: '#fff',
    fontSize: 45,
    fontFamily: 'Livvic-Regular',
  },
  weatherType: {
    color: '#fff',
    fontFamily: 'Livvic-Regular',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    marginLeft: 10,
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
});
