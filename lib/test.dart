import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:lottie/lottie.dart';
import 'package:sigil_web_page/links.dart';

class SigilLandingPage extends StatelessWidget {
  const SigilLandingPage({super.key});

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      backgroundColor: Colors.black,
      body: LayoutBuilder(
        builder: (context, constraints) {
          // تحديد حجم العناصر حسب حجم الشاشة
          bool isLargeScreen = constraints.maxWidth >= 900;
          double logoWidth = isLargeScreen ? 420 : 260;
          double logoHeight = isLargeScreen ? 120 : 80;
          double lottieSize = isLargeScreen ? 180 : 110;
          double comingFont = isLargeScreen ? 38 : 22;

          return Stack(
            children: [
              // النجمة في الأعلى يسار
              Positioned(
                top: isLargeScreen ? 60 : 24,
                left: isLargeScreen ? 60 : 16,
                child: SvgPicture.asset(
                  'assets/svg_images/star_icon.svg',
                  height: isLargeScreen ? 68 : 58,
                ),
                // استبدل بـ SvgPicture.asset إذا كان لديك SVG
              ),
              // اللوجو في المنتصف
              Align(
                alignment: Alignment.center,
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // استبدل بـ SvgPicture.asset('assets/logo.svg') إذا كان لديك SVG
                    SvgPicture.asset(
                      'assets/svg_images/logo.svg',
                      width: logoWidth,
                      height: logoHeight,
                    ),
                    SizedBox(width: 10),
                    Padding(
                      padding: EdgeInsets.only(top: isLargeScreen ? 50 : 40),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.end,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            "Film",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: isLargeScreen ? 28 : 16,
                            ),
                          ),
                          Text(
                            "Rental",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: isLargeScreen ? 28 : 16,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              // الدائرة الزرقاء والنص في الأسفل يسار
              Positioned(
                left: isLargeScreen ? 60 : 16,
                bottom: isLargeScreen ? 150 : 60,
                child: Stack(
                  clipBehavior: Clip.none,
                  // crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // لوتي الدائرة الزرقاء
                    Positioned(
                      left: isLargeScreen ? 70 : 20,
                      child: SizedBox(
                        width: lottieSize,
                        height: lottieSize,
                        child: Lottie.asset(
                          'assets/svg_images/Glitch2.json', // ضع المسار الصحيح للوتي
                          fit: BoxFit.cover,
                          repeat: true,
                        ),
                      ),
                    ),
                    SizedBox(width: 8),
                    // نص Coming Soon
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Text(
                          "Coming",
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: comingFont,
                          ),
                        ),
                        Text(
                          "Soon",
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: comingFont,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              // السوشيال ميديا في الأسفل يمين
              Positioned(
                right: isLargeScreen ? 60 : 16,
                bottom: isLargeScreen ? 80 : 20,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(right: 16.0),
                      child: Accounts(
                        size: isLargeScreen ? 32 : 20,
                      ),
                    ),
                    SizedBox(height: 8.h),
                    Builder(
                      builder: (context) {
                        return FittedBox(
                          fit: BoxFit.scaleDown,
                          child: Text(
                            "Where the story begins. Follow us",
                            style: TextStyle(
                              fontSize: isLargeScreen ? 10.spMin : 7.spMin,
                              color: Colors.white,
                            ),
                          ),
                        );
                      },
                    ),
                  ],
                ),
                // Column(
                //   crossAxisAlignment: CrossAxisAlignment.end,
                //   children: [
                //     Row(
                //       children: [
                //         Icon(Icons.close,
                //             color: Colors.white,
                //             size: isLargeScreen ? 32 : 20), // X
                //         SizedBox(width: 8),
                //         Icon(Icons.camera_alt,
                //             color: Colors.white,
                //             size: isLargeScreen ? 32 : 20), // Instagram
                //         SizedBox(width: 8),
                //         Icon(Icons.music_note,
                //             color: Colors.white,
                //             size: isLargeScreen ? 32 : 20), // TikTok
                //         SizedBox(width: 8),
                //         Icon(Icons.business,
                //             color: Colors.white,
                //             size: isLargeScreen ? 32 : 20), // LinkedIn
                //       ],
                //     ),
                //     SizedBox(height: 8),
                //     Text(
                //       "Where the story begins. Follow us",
                //       style: TextStyle(
                //         color: Colors.white,
                //         fontSize: isLargeScreen ? 16 : 10,
                //       ),
                //     ),
                //   ],
                // ),
              ),
            ],
          );
        },
      ),
    );
  }
}
