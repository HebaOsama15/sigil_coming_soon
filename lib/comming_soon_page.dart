import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

class CommingSoonPage extends StatelessWidget {
  const CommingSoonPage({super.key});

 
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      body: Container(
          height: size.height,
          width: size.width,
          decoration: BoxDecoration(
            color: Colors.black,
            image: DecorationImage(
                image: AssetImage("assets/svg_images/pngBackground.png"),
                fit: BoxFit.cover),
          ),
          child: Column(
            children: [
              Stack(
                children: [
                  // اللوقو
                  Align(
                    alignment: Alignment.topCenter,
                    child: Padding(
                      padding: EdgeInsets.only(top: size.height * 0.1),
                      child: SizedBox(
                        height: size.height * 0.3,
                        width: size.width * 0.5,
                        child: SvgPicture.asset('assets/svg_images/logo2.svg'),
                      ),
                    ),
                  ),

                  Positioned.fill(
                    top: size.height * 0.1,
                    child: Align(
                      alignment: Alignment.bottomCenter,
                      child: Text(
                        "Coming Soon",
                        textAlign: TextAlign.center,
                        style: GoogleFonts.ibmPlexSansArabic(
                          color: Colors.white,
                          fontSize: size.width * 0.035,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              Spacer(),
             
              SizedBox(
                height: size.height * 0.1,
              ),
            ],
          )
          //  SvgPicture.asset(
          //   'assets/svg_images/background.svg',
          //   // fit: BoxFit.cover,
          // ),
          ),
    );
  }

}
