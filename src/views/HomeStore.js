import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { getByCategorie } from '../services/getByCategorie';
import SmallCard from '../components/SmallCard';

export const HomeStore = () => {

   // cargar productos por categoria
   const { categorie, isLoading } = getByCategorie("ropa")
   const { categorie: categorie2 } = getByCategorie("accesorios")
   const { categorie: categorie3 } = getByCategorie("electronica")
   const { categorie: categorie4 } = getByCategorie("Deporte")

   return (
      <ScrollView style={{flex: 1}}>
         <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", padding: 5}}>
            <Text style={{ color: "#00297f", marginLeft: 20, marginTop: 8, fontSize: 20, fontWeight: 'bold'}}>Ropa</Text>
            <TouchableOpacity>            
               <Text>ver todo...</Text>
            </TouchableOpacity>
         </View>
         <ScrollView horizontal>
            {
               categorie.map( prod => (
                  <SmallCard 
                     key={prod.id}
                     {...prod}
                  />
               )) 
            }
         </ScrollView>

         <ScrollView horizontal>
            {
               categorie2.map( prod => (
                  <SmallCard 
                     key={prod.id}
                     {...prod}
                  />
               )) 
            }
         </ScrollView>

         <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", padding: 5}}>
            <Text style={{ color: "#00297f", marginLeft: 20, marginTop: 2, fontSize: 20, fontWeight: 'bold'}}>Electronica</Text>
            <TouchableOpacity>            
               <Text>ver todo...</Text>
            </TouchableOpacity>
         </View>

         <ScrollView horizontal>
            {
               categorie3.map( prod => (
                  <SmallCard 
                     key={prod.id}
                     {...prod}
                  />
               )) 
            }
         </ScrollView>

         <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", padding: 5}}>
            <Text style={{ color: "#00297f", marginLeft: 20, marginTop: 2, fontSize:20, fontWeight: 'bold'}}>Deportes</Text>
            <TouchableOpacity>            
               <Text>ver todo...</Text>
            </TouchableOpacity>
         </View>
         <ScrollView horizontal>
            {
               categorie4.map( prod => (
                  <SmallCard 
                     key={prod.id}
                     {...prod}
                  />
               )) 
            }
         </ScrollView>
      </ScrollView>
   );
};