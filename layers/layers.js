var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_AREAFUNGSIONAL_6 = new ol.format.GeoJSON();
var features_AREAFUNGSIONAL_6 = format_AREAFUNGSIONAL_6.readFeatures(json_AREAFUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAFUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAFUNGSIONAL_6.addFeatures(features_AREAFUNGSIONAL_6);
var lyr_AREAFUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAFUNGSIONAL_6, 
                style: style_AREAFUNGSIONAL_6,
                popuplayertitle: 'AREA FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/AREAFUNGSIONAL_6.png" /> AREA FUNGSIONAL'
            });
var format_KETERANGANKERUSAKANSALURAN_7 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_7 = format_KETERANGANKERUSAKANSALURAN_7.readFeatures(json_KETERANGANKERUSAKANSALURAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_7.addFeatures(features_KETERANGANKERUSAKANSALURAN_7);
var lyr_KETERANGANKERUSAKANSALURAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_7, 
                style: style_KETERANGANKERUSAKANSALURAN_7,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_3.png" /> Rusak Berat<br />' });
var format_JENISSALURAN_8 = new ol.format.GeoJSON();
var features_JENISSALURAN_8 = format_JENISSALURAN_8.readFeatures(json_JENISSALURAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISSALURAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISSALURAN_8.addFeatures(features_JENISSALURAN_8);
var lyr_JENISSALURAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISSALURAN_8, 
                style: style_JENISSALURAN_8,
                popuplayertitle: 'JENIS SALURAN',
                interactive: true,
    title: 'JENIS SALURAN<br />\
    <img src="styles/legend/JENISSALURAN_8_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENISSALURAN_8_1.png" /> Saluran Sekunder<br />' });
var format_AREANOMENKLATUR_9 = new ol.format.GeoJSON();
var features_AREANOMENKLATUR_9 = format_AREANOMENKLATUR_9.readFeatures(json_AREANOMENKLATUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREANOMENKLATUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREANOMENKLATUR_9.addFeatures(features_AREANOMENKLATUR_9);
var lyr_AREANOMENKLATUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREANOMENKLATUR_9, 
                style: style_AREANOMENKLATUR_9,
                popuplayertitle: 'AREA NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREANOMENKLATUR_9.png" /> AREA NOMENKLATUR'
            });
var format_BANGUNANNOMENKLATUR_10 = new ol.format.GeoJSON();
var features_BANGUNANNOMENKLATUR_10 = format_BANGUNANNOMENKLATUR_10.readFeatures(json_BANGUNANNOMENKLATUR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANNOMENKLATUR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANNOMENKLATUR_10.addFeatures(features_BANGUNANNOMENKLATUR_10);
var lyr_BANGUNANNOMENKLATUR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANNOMENKLATUR_10, 
                style: style_BANGUNANNOMENKLATUR_10,
                popuplayertitle: 'BANGUNAN NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNANNOMENKLATUR_10.png" /> BANGUNAN NOMENKLATUR'
            });
var format_Tikungan_11 = new ol.format.GeoJSON();
var features_Tikungan_11 = format_Tikungan_11.readFeatures(json_Tikungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_11.addFeatures(features_Tikungan_11);
var lyr_Tikungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_11, 
                style: style_Tikungan_11,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_11.png" /> Tikungan'
            });
var format_Beda_Pasangan_12 = new ol.format.GeoJSON();
var features_Beda_Pasangan_12 = format_Beda_Pasangan_12.readFeatures(json_Beda_Pasangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_12.addFeatures(features_Beda_Pasangan_12);
var lyr_Beda_Pasangan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_12, 
                style: style_Beda_Pasangan_12,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_12.png" /> Beda_Pasangan'
            });
var format_Gorong__Gorong_13 = new ol.format.GeoJSON();
var features_Gorong__Gorong_13 = format_Gorong__Gorong_13.readFeatures(json_Gorong__Gorong_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_13.addFeatures(features_Gorong__Gorong_13);
var lyr_Gorong__Gorong_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_13, 
                style: style_Gorong__Gorong_13,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_13.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per_50_14 = new ol.format.GeoJSON();
var features_Titik_Per_50_14 = format_Titik_Per_50_14.readFeatures(json_Titik_Per_50_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_14.addFeatures(features_Titik_Per_50_14);
var lyr_Titik_Per_50_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_14, 
                style: style_Titik_Per_50_14,
                popuplayertitle: 'Titik_Per_50',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_14.png" /> Titik_Per_50'
            });
var format_Bangunan_Air_15 = new ol.format.GeoJSON();
var features_Bangunan_Air_15 = format_Bangunan_Air_15.readFeatures(json_Bangunan_Air_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_15.addFeatures(features_Bangunan_Air_15);
var lyr_Bangunan_Air_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_15, 
                style: style_Bangunan_Air_15,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_15.png" /> Bangunan_Air'
            });
var format_BangunanBagi_16 = new ol.format.GeoJSON();
var features_BangunanBagi_16 = format_BangunanBagi_16.readFeatures(json_BangunanBagi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanBagi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanBagi_16.addFeatures(features_BangunanBagi_16);
var lyr_BangunanBagi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanBagi_16, 
                style: style_BangunanBagi_16,
                popuplayertitle: 'Bangunan Bagi',
                interactive: true,
                title: '<img src="styles/legend/BangunanBagi_16.png" /> Bangunan Bagi'
            });
var format_BangunanSadap_17 = new ol.format.GeoJSON();
var features_BangunanSadap_17 = format_BangunanSadap_17.readFeatures(json_BangunanSadap_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanSadap_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanSadap_17.addFeatures(features_BangunanSadap_17);
var lyr_BangunanSadap_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanSadap_17, 
                style: style_BangunanSadap_17,
                popuplayertitle: 'Bangunan Sadap',
                interactive: true,
                title: '<img src="styles/legend/BangunanSadap_17.png" /> Bangunan Sadap'
            });
var format_RumahPompa_18 = new ol.format.GeoJSON();
var features_RumahPompa_18 = format_RumahPompa_18.readFeatures(json_RumahPompa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahPompa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahPompa_18.addFeatures(features_RumahPompa_18);
var lyr_RumahPompa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahPompa_18, 
                style: style_RumahPompa_18,
                popuplayertitle: 'Rumah Pompa',
                interactive: true,
                title: '<img src="styles/legend/RumahPompa_18.png" /> Rumah Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Bangunan_Air_15,lyr_BangunanBagi_16,lyr_BangunanSadap_17,lyr_RumahPompa_18,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_11,lyr_Beda_Pasangan_12,lyr_Gorong__Gorong_13,lyr_Titik_Per_50_14,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREANOMENKLATUR_9,lyr_BANGUNANNOMENKLATUR_10,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_AREAFUNGSIONAL_6.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_7.setVisible(true);lyr_JENISSALURAN_8.setVisible(true);lyr_AREANOMENKLATUR_9.setVisible(true);lyr_BANGUNANNOMENKLATUR_10.setVisible(true);lyr_Tikungan_11.setVisible(true);lyr_Beda_Pasangan_12.setVisible(true);lyr_Gorong__Gorong_13.setVisible(true);lyr_Titik_Per_50_14.setVisible(true);lyr_Bangunan_Air_15.setVisible(true);lyr_BangunanBagi_16.setVisible(true);lyr_BangunanSadap_17.setVisible(true);lyr_RumahPompa_18.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_AREAFUNGSIONAL_6,lyr_KETERANGANKERUSAKANSALURAN_7,lyr_JENISSALURAN_8,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREAFUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENISSALURAN_8.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'PANJANG': 'PANJANG', });
lyr_AREANOMENKLATUR_9.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'PEMBAGIAN': 'PEMBAGIAN', 'AREA': 'AREA', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_Tikungan_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'FOTO_1': 'FOTO_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Beda_Pasangan_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'FOTO_1': 'FOTO_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Gorong__Gorong_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', });
lyr_Titik_Per_50_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'FOTO_1': 'FOTO_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Bangunan_Air_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'FOTO_1': 'FOTO_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_BangunanBagi_16.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'FOTO_1': 'FOTO_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_BangunanSadap_17.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', });
lyr_RumahPompa_18.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'FOTO_1': 'FOTO_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREAFUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': '', 'PANJANG': 'TextEdit', });
lyr_JENISSALURAN_8.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREANOMENKLATUR_9.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_Tikungan_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'FOTO_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'ExternalResource', 'Foto_7': 'ExternalResource', 'Foto_8': 'ExternalResource', });
lyr_Beda_Pasangan_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'FOTO_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'ExternalResource', 'Foto_7': 'ExternalResource', 'Foto_8': 'ExternalResource', });
lyr_Gorong__Gorong_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'TextEdit', 'FOTO_3': 'TextEdit', });
lyr_Titik_Per_50_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'FOTO_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'ExternalResource', 'Foto_7': 'ExternalResource', 'Foto_8': 'ExternalResource', });
lyr_Bangunan_Air_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'FOTO_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'ExternalResource', 'Foto_7': 'ExternalResource', 'Foto_8': 'ExternalResource', });
lyr_BangunanBagi_16.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'FOTO_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'ExternalResource', 'Foto_7': 'ExternalResource', 'Foto_8': 'ExternalResource', });
lyr_BangunanSadap_17.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'TextEdit', 'FOTO_3': 'TextEdit', 'FOTO_4': 'TextEdit', });
lyr_RumahPompa_18.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'FOTO_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'ExternalResource', 'Foto_7': 'ExternalResource', 'Foto_8': 'ExternalResource', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREAFUNGSIONAL_6.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENISSALURAN_8.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'KATEGORI': 'hidden field', 'PANJANG': 'inline label - visible with data', });
lyr_AREANOMENKLATUR_9.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldLabels', {'NAME': 'no label', 'Descriptio': 'no label', 'X': 'no label', 'Y': 'no label', 'Bujur': 'no label', 'Lintang': 'no label', 'Panjang': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_Tikungan_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'FOTO_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Beda_Pasangan_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'FOTO_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Gorong__Gorong_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', });
lyr_Titik_Per_50_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'FOTO_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Bangunan_Air_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'FOTO_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_BangunanBagi_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'FOTO_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_BangunanSadap_17.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', });
lyr_RumahPompa_18.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'FOTO_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_RumahPompa_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});