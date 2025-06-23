import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:url_launcher/url_launcher.dart';

InkWell iconButton(
    {required double size, required String url, required String icon}) {
  return InkWell(
    onTap: () => launchsUrl(url),
    child: Padding(
      padding: const EdgeInsets.only(right: 10),
      child: SvgPicture.asset(
        icon,
        height: size,
      ),
    ),
  );
}

Future<void> launchsUrl(String url) async {
  if (!await launchUrl(
    Uri.parse(url),
  )) {
    throw Exception('Could not launch $url');
  }
}

class Accounts extends StatelessWidget {
  final double size;
  const Accounts({super.key, required this.size});

  final String tiktokUrl =
      "https://www.tiktok.com/@sigilfilm?is_from_webapp=1&sender_device=pc";
  final String linldenUrl = 'https://www.linkedin.com/company/sigilfilm/';
  final String xUrl = 'https://x.com/sigilfilm?t=LjFVuYus2C8jl-vENcHFWw&s=09';
  final String instaUrl =
      'https://www.instagram.com/sigilfilm?igsh=MXBlYmM4M2plbTAxaA==';

  @override
  Widget build(BuildContext context) {
    // final size = MediaQuery.of(context).size;
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        iconButton(
            size: size, icon: "assets/svg_images/tiktok2.svg", url: tiktokUrl),
        // SizedBox(
        //   width: size.width * 0.02,
        // ),
        iconButton(
          size: size,
          url: linldenUrl,
          icon: "assets/svg_images/linkedin2.svg",
        ),
        // SizedBox(
        //   width: size.width * 0.02,
        // ),
        iconButton(
          size: size,
          url: xUrl,
          icon: "assets/svg_images/X2.svg",
        ),
        // SizedBox(
        //   width: size.width * 0.02,
        // ),
        iconButton(
            size: size, url: instaUrl, icon: 'assets/svg_images/insta2.svg')
      ],
    );
  }
}
                                                                      