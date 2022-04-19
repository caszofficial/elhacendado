import CallIcon from "@mui/icons-material/Call";
import DirectionsIcon from "@mui/icons-material/Directions";
import ReceiptIcon from "@mui/icons-material/Receipt";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import product1 from "../../src/2021-01-13.png";
import product2 from "../../src/Blanqueado Caja x 200 GRS.png";
import product3 from "../../src/Gelatina Blanca x 180 GRS.png";
import product4 from "../../src/Gelatina Negra Caja x 360 GRS.png";
import image from "../../src/image.jpg";
import product5 from "../../src/Panelita con Coco Bandeja x 240 GRS.png";
import product6 from "../../src/Panelita con Coco Caja x 240 GRS.png";
import product7 from "../../src/Queso Dulce Caja x 240 GRS.png";

function MainMobile() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar
            position="fixed"
            sx={{ top: "auto", bottom: 0 }}
            color="primary"
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  aria-label="menu"
                  sx={{ p: 0 }}
                >
                  <ReceiptIcon />
                </IconButton>
                <Typography
                  color="secondary"
                  sx={{ fontSize: 10, margin: "auto" }}
                >
                  Cotización
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  aria-label="menu"
                  sx={{ p: 0 }}
                >
                  <CallIcon />
                </IconButton>
                <Typography
                  color="secondary"
                  sx={{ fontSize: 10, margin: "auto" }}
                >
                  Llamar
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  aria-label="menu"
                  sx={{ p: 0 }}
                >
                  <DirectionsIcon />
                </IconButton>
                <Typography
                  color="secondary"
                  sx={{ fontSize: 10, margin: "auto" }}
                >
                  Cómo llegar
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <AppBar
            position="fixed"
            sx={{ top: 0, bottom: "auto", display: "flex" }}
          >
            <Toolbar>
              <Typography
                color="secondary"
                sx={{ fontWeight: "bold", margin: "auto" }}
              >
                Derivados de la caña el Hacendado
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", mt: 10, mb: 10 }}>
          <Paper
            variant="outlined"
            sx={{
              margin: "auto",
              width: "95%",
              pb: 3,
              pt: 2,
            }}
          >
            <Box
              component={"img"}
              src={image}
              sx={{ height: 200, width: "100%" }}
            />
            <Box sx={{ p: 2 }}>
              <Typography
                color="secondary"
                variant="h1"
                sx={{
                  fontSize: 32,
                  wordBreak: "break-word",
                  lineHeight: 1.2,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Derivados de la caña el Hacendado
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Empresa colombiana de dulces típicos
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Abrimos mañana a las 07:00
              </Typography>
            </Box>
            <Button
              color="secondary"
              variant="contained"
              sx={{ display: "flex", margin: "auto" }}
            >
              Pedir una cotización
            </Button>
            <Box sx={{ p: 2, bgcolor: "#f1f1f1", mt: 5, mb: 2 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 28,
                  textAlign: "center",
                  mb: 1,
                  fontWeight: "bold",
                }}
              >
                QUIÉNES SOMOS
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Somos una empresa familiar con más de dos décadas en el mercado,
                brindando tradición y sabor a muchos hogares colombianos. Nos
                caracterizamos por ofrecer dulces típicos de la región con un
                delicioso sabor y con ingredientes básicos como la panela, la
                cual es producida por campesinos locales. Manejamos todo un
                sistema de gestión de calidad que certifica que los productos
                cumplen con todos los requerimientos sanitarios exigidos por la
                ley.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: 28,
                  textAlign: "center",
                  mb: 1,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                GALERÍA
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                component={"img"}
                src={product1}
                sx={{ height: 300, width: "90%" }}
              />
              <Box
                component={"img"}
                src={product2}
                sx={{ height: 300, width: "90%" }}
              />
              <Box
                component={"img"}
                src={product3}
                sx={{ height: 300, width: "90%" }}
              />
              <Box
                component={"img"}
                src={product4}
                sx={{ height: 300, width: "90%" }}
              />
              <Box
                component={"img"}
                src={product5}
                sx={{ height: 300, width: "90%" }}
              />
              <Box
                component={"img"}
                src={product6}
                sx={{ height: 300, width: "90%" }}
              />
              <Box
                component={"img"}
                src={product7}
                sx={{ height: 300, width: "100%" }}
              />
            </Box>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 28,
                  textAlign: "center",
                  mb: 2,
                  fontWeight: "bold",
                }}
              >
                COMUNICATE CON NOSOTROS
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 4 }}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63440.70074918912!2d-75.45787102089847!3d6.388350099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e443ca2b2ae2db5%3A0xa4e019a87af001eb!2sLos%20Blanqueados!5e0!3m2!1ses!2sco!4v1647984794360!5m2!1ses!2sco"
                width="700"
                height="700"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", mb: 4 }}>
              <Box sx={{ width: "90%", display: "flex", mb: 2 }}>
                <Box sx={{ margin: "auto" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    Contacto
                  </Typography>
                  <Button color="secondary" variant="contained">
                    Llamar Ahora
                  </Button>
                  <Typography>321 8387123</Typography>
                </Box>
              </Box>
              <Box sx={{ width: "90%", display: "flex", mb: 2 }}>
                <Box sx={{ margin: "auto" }}>
                  <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                    Dirección
                  </Typography>
                  <Button color="secondary" variant="contained">
                    Cómo Llegar
                  </Button>
                  <Typography>
                    Vereda San Diego
                    <br /> Girardota,
                    <br /> Antioquia Colombia
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "90%", display: "flex", mb: 2 }}>
                <Box sx={{ margin: "auto" }}>
                  <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                    Horario de atención
                  </Typography>
                  <Typography>Lun: 7:00–17:00</Typography>
                  <Typography>Mar: 7:00–17:00</Typography>
                  <Typography>Mier: 7:00–17:00</Typography>
                  <Typography>Jue: 7:00–17:00</Typography>
                  <Typography>Vie: 7:00–17:00</Typography>
                  <Typography>Sab: 7:00–17:00</Typography>
                  <Typography>Dom: Cerrado</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default MainMobile;
