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
  if (location.weatherType === 'Açık') {
    bgImg = require('./assets/sunny.jpg');
  } else if (location.weatherType.includes('Kar')) {
    bgImg = require('./assets/snowly.jpg');
  } else if (location.weatherType.includes('Bulut')) {
    bgImg = require('./assets/broken_cloudy.jpg');
  } else if (location.weatherType.includes('Yağmur')) {
    bgImg = require('./assets/rainy.jpg');
  }

  return (
    <View
      style={{width: windowWidth, height: windowHeight}}
      key={index}>
      <ImageBackground
        source={bgImg}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 20,
          }}>
          <View style={styles.topInfoWrapper}>
            <View>
              <Text style={styles.city}>
                {location.city.toLocaleUpperCase('tr-TR')}
              </Text>
              <Text style={styles.time}>
                {location.dateTime.replace('2022', '')}
              </Text>
            </View>
            <View>
              <Text style={styles.temparature}>
                {location.temparature}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {/* {WeatherIcon(location.weatherType)} */}
                <Text style={styles.weatherType}>
                  {location.weatherType}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'rgba(255,255,255,0.7)',
              marginTop: 20,
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.bottomInfoWrapper}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoText}>Rüzgar</Text>
              <Text style={[styles.infoText, {fontSize: 24}]}>
                {Number(location.wind).toFixed()}
              </Text>
              <Text style={styles.infoText}>km/h</Text>
              <View style={styles.infoBar}>
                <View
                  style={{
                    width: location.wind / 2,
                    height: 5,
                    backgroundColor: '#69F0AE',
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoText}>Yağış</Text>
              <Text style={[styles.infoText, {fontSize: 24}]}>
                {location.rain}
              </Text>
              <Text style={styles.infoText}>%</Text>
              <View style={styles.infoBar}>
                <View
                  style={{
                    width: location.rain / 2,
                    height: 5,
                    backgroundColor: '#8EDFFF',
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoText}>Nem</Text>
              <Text style={[styles.infoText, {fontSize: 24}]}>
                {location.humidity}
              </Text>
              <Text style={styles.infoText}>%</Text>
              <View style={styles.infoBar}>
                <View
                  style={{
                    width: location.humidity / 2,
                    height: 5,
                    backgroundColor: '#F44336',
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
})}
</ScrollView>

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